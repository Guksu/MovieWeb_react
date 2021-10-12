import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { result: topRated },
      } = await tvApi.topRated();

      const {
        data: { result: popular },
      } = await tvApi.popular();

      const {
        data: { result: airingToday },
      } = await tvApi.airingToday();

      this.setState(topRated, popular, airingToday);
    } catch {
      this.setState({
        error: "Can't find TV Info",
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { topRated, popular, airingToday, loading, error } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingTday={airingToday}
        loading={loading}
        error={error}
      />
    );
  }
}
