// 컨테이너(Container) : data와 state(상태값)를 가지고, api를 호출하고, 기타 모든 로직들을 처리한다.
// (데이터를 받아와서 처리하는 것을 담당함)

// 프리젠터(Presenter) : 컨테이너가 처리한 데이터들을 화면에 뿌려주는 역할을 하는 함수형 컴포넌트
// 프리젠터는 state(상태값), api, 클래스 등을 다루지 않는다.
// (데이터를 화면에 뿌려주고 스타일을 담당함)

import { moviesApi } from "api";
import React from "react";
import HomePresenterr from "./HomePresenter";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { result: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { result: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { result: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies Info",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenterr
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      ></HomePresenterr>
    );
  }
}
