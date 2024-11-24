import Social from "./components/Social";
import AccountsPlatforms from "./components/AccountsPlatforms";
import PostSchedule from "./components/PostSchedule";
import SocialSchedule from "./components/SocialSchedule";
import FollowersContent from "./components/FollowersContent";
import Growth from "./components/Growth";
import Quicker from "./components/Quicker";
import AI from "./components/AI";

function App() {
  return (
    <main className="flex flex-col xl:flex-row-reverse gap-8">

      {/* Main Grid Section */}
      <div className="grid gap-8 p-16P xl:grid-cols-3 xl:grid-rows-3 xl:gap-8 xl:pl-0">
        {/* Social spans 2 columns */}
        <Social className="shadow-centered-black-soft rounded-10BR xl:col-span-2 xl:row-span-1" />
        
        {/* Accounts Platforms */}
        <AccountsPlatforms className="shadow-centered-black-soft rounded-10BR xl:col-start-1 xl:row-start-2" />
        
        {/* Post Schedule */}
        <PostSchedule className="shadow-centered-black-soft rounded-10BR xl:col-start-2 xl:row-start-2" />
        
        {/* Social Schedule spans 2 rows */}
        <SocialSchedule className="shadow-centered-black-soft rounded-10BR xl:col-start-3 xl:row-span-2" />
        
        {/* Growth */}
        <Growth className="shadow-centered-black-soft rounded-10BR xl:col-start-1 xl:row-start-3" />
        
        {/* Followers Content spans 2 columns */}
        <FollowersContent className="shadow-centered-black-soft rounded-10BR xl:col-span-2 xl:row-start-3" />
      </div>

      {/* Secondary Grid */}
      <div className="flex flex-col gap-8 p-16P xl:grid xl:grid-rows-2 xl:pr-0">
        <Quicker className='shadow-centered-black-soft rounded-10BR xl:row-start-1' />
        <AI className='shadow-centered-black-soft rounded-10BR xl:row-start-2' />
      </div>
    </main>
  );
}

export default App;
