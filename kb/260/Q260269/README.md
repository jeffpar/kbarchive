---
layout: page
title: "Q260269: How to Enable UPN (or Single) Logon with IIS 5.0"
permalink: /kb/260/Q260269/
---

## Q260269: How to Enable UPN (or Single) Logon with IIS 5.0

{% raw %}

	Article: Q260269
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 09-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 2000 offers the new possibility of a "single logon" for users.
	Therefore, a user's logon name and e-mail address can be the same in Windows
	2000. For example, John@microsoft.com can be an e-mail address and a logon name
	in a Windows 2000 domain. John can still choose to log on by using domain\john,
	or just john if he chooses.
	
	A user's name in the form of user@domain.com is known as the User Principal Name
	(UPN). This option only works in a Windows 2000 domain environment (in other
	words, you must have Active Directory running, and the user must be in a domain
	account in that directory).
	
	When you are using Basic Authentication, a small amount of setup is required for
	this feature to function properly. This also assumes that the e-mail address,
	domain, and user name are intentionally made to be identical (although later
	versions of Exchange Server should make this much easier to work with).
	
	MORE INFORMATION
	================
	
	To configure your Web site to accept UPNs when you are using Basic
	authentication, perform the following steps:
	
	1. Open the Internet Services Manager (or custom management console that
	  contains the IIS snap-in).
	
	2. Expand your Web sites, and then click to highlight the Web site where you
	  want to enable the UPN logon.
	
	3. Right-click the Web site, and then click Properties.
	
	4. Click the Directory Security tab.
	
	5. Under the Anonymous Access and Authentication Control section, click Edit.
	
	6. Next to Basic Authentication, click Edit. (Note that this step assumes that
	  you already are using Basic Authentication. If you are not using it, click to
	  enable the Basic Authentication check box and make sure to disable other
	  forms of authentication).
	
	7. Under the Domain Name section, insert "\" (without the quotation marks).
	
	8. Click OK, and then exit the Web site property sheet. (Make sure to click OK
	  on the other windows to ensure that your changes take effect.)
	
	To test your configuration, log on to a Web site by using Basic authentication,
	use user@domain.com (provided your domain is 'domain.com') and than enter your
	password as usual.
	
	NOTE: You can still log on to multiple domains in this way by using
	user@domain.com, or the standard domain\user, or domain.com\user.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q243280 Users Can Log in Using User Name or User Principle Name
	
	Additional query words: iis 5 authentication basic UPN
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
