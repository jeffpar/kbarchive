---
layout: page
title: "Q242223: XADM: How to Install and Use the Global Address List Modify Tool"
permalink: /kb/242/Q242223/
---

## Q242223: XADM: How to Install and Use the Global Address List Modify Tool

	Article: Q242223
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Global Address List Modify for Web tool is an application that is based on
	Active Server Pages and HTML. It enables users to modify the personal
	information that is displayed in the user properties of the Exchange Server
	global address list.
	
	MORE INFORMATION
	================
	
	The Global Address List Modify for Web tool is available in the BackOffice
	Resource Kit, Second Edition, in the Exchange\Winnt\<platform>\Web\Galmod
	folder, and in the BackOffice version 4.5 Resource Kit in the
	<platform>\Exchange\Web\Galmod folder.
	
	Installing the Global Address List Modify for Web Tool:
	
	To install the Global Address List Modify for Web Tool:
	
	1. Create a directory on your Microsoft Internet Information Server (IIS)
	  computer, and then copy all of the files from the Web\Galmod folder in the
	  BackOffice Resource Kit to it.
	
	2. Create a virtual directory on your Internet Information Server computer, and
	  point it to the directory that you created in step 1.
	
	NOTE: Make sure that you assign Read and Script access permissions to the virtual
	directory. For additional information about how to create a virtual directory,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q172138 HOW TO: Create a Virtual Directory in Internet Information Services
	  (IIS)
	
	3. If your computer is running Internet Information Server version 3.0 or 4.0,
	  you must also have Microsoft Active Directory Service Interface (ADSI)
	  version 2.5 installed on the IIS computer to use the Global Address List
	  Modify for Web tool.
	
	You can download ADSI version 2.5 from the following Web site:
	
	  http://www.microsoft.com/windows/server/technical/directory/adsilinks.asp
	
	4. If Internet Information Server uses Basic (Clear-Text) authentication, at the
	  IIS computer, assign Log on Locally user permissions to the Everyone group.
	
	5. Enable the Lightweight Access Directory Protocol (LDAP) on the Exchange
	  Server 5.5 computer.
	
	  For more information about how to enable LDAP, please refer to the Microsoft
	  Exchange Server Administrator's Guide.
	
	Using the Global Address List Modify for Web Tool:
	
	To use the Global Address List Modify for Web tool:
	
	1. In the Web browser, in the Address box, type the following address:
	
	  http://<IIS servername>/<virtual directory name>
	
	2. In the Exchange Server Name box, type the name of the Exchange Server
	  computer, and then click Continue.
	
	  NOTE: If you have already installed Microsoft Exchange Outlook Web Access on
	  the IIS computer, the application reads the Exchange Server information from
	  the registry and the name of the Exchange Server computer is displayed for
	  you.
	
	3. If the IIS computer uses Basic (Clear-Text) authentication, you are prompted
	  for the account name and password. Type the Windows NT account name and
	  password, and then click OK to continue.
	
	4. In the Name box, type the user's display name or the first part of the
	  display name, and then click Find Name.
	
	  NOTE: The Global Address List Modify for Web tool searches the Display field
	  in Exchange Server to find the user's global address list entry.
	
	5. From the entries that are displayed, click the appropriate global address
	  list entry, and then click Edit User Info.
	
	6. After you modify the relevant personal information, click Save User Info. The
	  information is updated in the global address list.
	
	Additional Consideration:
	
	By default, users cannot change some information, such as the State, Name, Title,
	Company, Department, and Office fields. If you want users to be able to modify
	that information, you must set appropriate permissions on the global address
	list properties by using the Exchange Server Administrator program in raw mode.
	
	WARNING: If you use the raw mode of the Exchange Server Administrator program
	(admin /r) incorrectly, serious problems may occur that may require you to
	reinstall Microsoft Windows NT Server, Microsoft Exchange Server, or both.
	Microsoft cannot guarantee that problems that result from using raw mode
	incorrectly can be solved. Use raw mode at your own risk.
	
	1. Start the Exchange Server Administrator program in raw mode by typing the
	  following at a command prompt:
	
	  c:\exchsrvr\bin\admin /r
	
	2. On the View menu, click Raw Directory.
	
	3. In the left pane of the window, click Schema.
	
	4. In the right pane of the window, double-click the attribute that you want to
	  modify, for example, the Department attribute.
	
	5. In the Object Attributes box, click Access-Category, and then change the
	  value to 2. This grants User Access permission for the object.
	
	6. Click Set to make the change.
	
	7. Click OK. When the warning message appears, click OK again.
	
	The Global Address List Modify for Web tool is available in the Microsoft
	BackOffice Resource Kit. Microsoft Product Support Services (PSS) will use
	commercially reasonable efforts to address all support problems.
	
	Additional query words: bork reskit rkit
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
