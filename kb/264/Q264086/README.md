---
layout: page
title: "Q264086: HOWTO: Automatically Log on to IIS Using NT Challenge/Response"
permalink: /kb/264/Q264086/
---

## Q264086: HOWTO: Automatically Log on to IIS Using NT Challenge/Response

{% raw %}

	Article: Q264086
	Product(s): Internet Information Server
	Version(s): 4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,4.5,5,5.0
	Operating System(s): 
	Keyword(s): kbIE400 kbie401 kbOSWin2000 kbie500 kbDSupport kbiis400 kbiis500
	Last Modified: 20-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.5, 5 for Macintosh 
	- Microsoft Internet Explorer versions 4.01, 5 for UNIX on HPUX 
	- Microsoft Internet Explorer versions 4.01, 5 for UNIX on Sun Solaris 
	- Microsoft Internet Explorer version 5 for Windows 2000 
	- Microsoft Internet Explorer versions 4.0, 4.01, 5 for Windows 3.1 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 95 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows 98 
	- Microsoft Internet Explorer versions 4.0, 5 for Windows 98 Second Edition 
	- Microsoft Internet Explorer versions 4.0, 4.01, 5 for Windows NT 3.51 
	- Microsoft Internet Explorer versions 4.0, 4.01, 4.01 Service Pack 1, 4.01 Service Pack 2, 5 for Windows NT 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is the responsibility of the user's Web browser to pass the user's
	credentials to an Internet Information Services (IIS) Web server. If Internet
	Explorer is configured properly, the browser can automatically log on to IIS
	using Windows NT Challenge/Response over HTTP with the user's
	currently-logged-on Microsoft Windows account.
	
	MORE INFORMATION
	================
	
	The following conditions must be met for Internet Explorer to automatically log
	on to Internet Information Services using NT Challenge/Response over HTTP with
	the user's currently-logged-on Windows account:
	
	- Windows NT Challenge/Response (NTCR) authentication must be enabled and
	  working on the target Web site, virtual directory, or file. You can enable NT
	  Challenge/Response in the Internet Service Manager by selecting NT
	  Challenge/Response authentication (IIS 4) or Integrated Windows
	  authentication (IIS 5).
	
	NOTE: Integrated Windows authentication (IIS5) includes both Kerberos
	authentication and Windows NT Challenge/Response authentication. For additional
	information on how IIS authenticates browser clients, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q264921 How IIS Authenticates Browser Clients
	
	Some network devices such as proxy servers will block NTCR authentication.
	
	- The user's Web browser must be Internet Explorer, which is the only browser
	  that supports NTCR.
	
	- The Internet Explorer security zone in which the target Web site appears must
	  be set to "Automatic logon only in Intranet zone (intranet)" or "Automatic
	  logon with current username and password (internet/extranet)". "Automatic
	  logon only in Intranet zone" is the default setting for the Intranet security
	  zone in Internet Explorer 5.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q174360 How to Use Security Zones in Internet Explorer
	
	- The user who is requesting the Web page must have appropriate file system
	  (NTFS) permissions to the Web page as well as all of the objects referenced
	  in the Web page. For example, a user may have full control permissions to a
	  Web page but that user will be prompted for a password if he or she is denied
	  access to a graphic in a secure folder.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbIE400 kbie401 kbOSWin2000 kbie500 kbDSupport kbiis400 kbiis500 
	Technology        : kbHWMAC kbOSMAC kbiisSearch kbIEsearch kbiis500 kbiis400 kbZNotKeyword2 kbIENT400Search kbIENT351Search kbIE95Search kbIE310Search kbIEUNIXSearch kbIEMacSearch kbIE500Search kbZNotKeyword3 kbIE2000Search kbIE98Search kbIE400Mac kbIE401Mac kbIE450Mac kbIE500Mac kbIE401UNIXHP kbIE500UNIXHP kbIE401UNIXSun kbIE500UNIXSun kbIE500Win2000 kbIE400Win310 kbIE401Win310 kbIE500Win310 kbIE400Win95 kbIE401Win95 kbIE401Win95SP1 kbIE401Win95SP2 kbIE500Win95 kbIE400Win98 kbIE401Win98 kbIE401Win98SP1 kbIE401Win98SP2 kbIE500Win98 kbIE400Win98SE kbIE500Win98SE kbIE400WinNT351 kbIE401WinNT351 kbIE500WinNT351 kbIE400WinNT400 kbIE401WinNT400 kbIE401WinNT400SP1 kbIE401WinNT400SP2 kbIE500WinNT400 kbIE98SESearch kbZnotKeyword7
	Version           : :4.0,4.01,4.01 Service Pack 1,4.01 Service Pack 2,4.5,5,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
