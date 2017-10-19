---
layout: page
title: "Q299353: Passport Cookies Are Not Deleted When a User Signs Out"
permalink: /kb/299/Q299353/
---

## Q299353: Passport Cookies Are Not Deleted When a User Signs Out

	Article: Q299353
	Product(s): Microsoft Developer Network
	Version(s): 1.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Passport, version 1.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passport cookies are not deleted when a user signs out of the site.
	
	CAUSE
	=====
	
	Several issues can cause Passport cookie deletion to fail. See the "More
	Information" section for information on how to determine the cause of the
	failure.
	
	MORE INFORMATION
	================
	
	- Check the Site ID value that is set in the Passport Manager Administration
	  utility. If the value is set to 1, your site is in test mode.
	
	While Passport Manager is in test mode, Passport cookies remain on the user's
	browser until the browser is closed, and a sign-out check-mark image is not
	displayed on the Passport server logout page. Complete the registration process
	and edit the Site ID value to reflect your site's Site ID. Passport Manager does
	not and cannot delete cookies while the Site ID is set to 1.
	
	Change the Site ID value in the Passport Manager Administration utility to the
	value that was given to you when you received your Passport encryption key.
	
	For more information, see the following Microsft Passport Software Development
	Kit (SDK) Web site:
	
	  Test Mode
	  http://www.passport.com/sdkdocuments/sdk14/Reference/Operations/testmode.htm
	
	- Ensure that the path and file name of your cookie-delete page matches the
	  ExpireCookieURL that you provided when you registered your site, and also
	  ensure that the cookies are written to the same domain and path that is
	  specified in the Passport Manager Administration Utility.
	
	- Ensure that the cookie domain field in the Passport Administration Utility is
	  preceded with a dot (.) if you share Passport cookies with multiple sites in
	  a larger secondary domain. Some earlier versions of Netscape browsers do not
	  delete cookies from a root that does not have a leading dot specified in the
	  domain of the cookie when writing headers to delete cookies. For example,
	  "msn.com" may not work in this case, but ".msn.com" does.
	
	- Ensure that your cookie-delete page be served from your Web site root to make
	  sure that it has permissions to delete any possible paths where Passport
	  cookies have been written. This is strongly recommended, because otherwise
	  your cookie-delete page may not have rights to delete all necessary cookies,
	  as determined by the cookie access rules that are enforced by client
	  browsers. To test this, set and then delete some of your own cookies in
	  various paths.
	
	- If your site uses multiple servers with Passport Manager installed, ensure
	  that all of the servers are writing the cookies to the same domain and path,
	  and also make sure that all of your cookie-delete pages are in agreement.
	
	- Open your cookie-delete page directly with a browser, making sure that the
	  browser session has established Passport cookies in your site. It should
	  return a check mark image. If it does not, there may be underlying Active
	  Server Pages (ASP) errors. Your cookie-delete page should always return an
	  image, even if you are using more sophisticated code that can detect deletion
	  failures. Your site's cookie-delete page is loaded as an image, not as a file
	  include, when it is called by the Passport network.
	
	- Ensure that your cookie-delete page specifies its output response file type
	  as an image. Some Microsoft Internet Explorer browsers (depending on security
	  patches) do not load any URL that is called as an <IMG> unless the MIME
	  type that is returned through that URL really specifies an image as content
	  type.
	
	- If the problem is isolated to Internet Explorer version 6 beta browser users,
	  ensure that your your cookie-delete page is setting a Platform for Privacy
	  Preferences (P3P) mini-header, which is required for proper cookie deletion
	  on that browser. This is due to the implementation of P3P code in that
	  browser and its effect on certain cookie-delete scenarios. For details on
	  P3P, Internet Explorer 6, and the specific mini-header requirements, see the
	  following Passport SDK Web site:
	
	  Passport and P3P
	  http://www.passport.com/sdkdocuments/sdk14/Implementation/p3p.htm
	
	- Check the browser preferences on the browser that is being used for testing.
	  Internet Explorer 6 and other browsers permit certain non-default security
	  zone or advanced settings that prevent proper cookie read or write
	  operations. Allowing for cookie sets, writes, and deletes is a requirement
	  for any browser user when using Passport services.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbPassport140 kbPassportSearch
	Version           : :1.4
	Issue type        : kbprb
	
	=============================================================================
	
