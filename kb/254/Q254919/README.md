---
layout: page
title: "Q254919: Installing the Windows Desktop Update with Internet Explorer 5.x"
permalink: kb/254/Q254919/
---

## Q254919: Installing the Windows Desktop Update with Internet Explorer 5.x

	Article: Q254919
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 4.0,5.0,95
	Operating System(s): 
	Keyword(s): kbinterop kbtool
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Explorer Administration Kit version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how a corporate administrator can add the Windows Desktop
	Update to Windows 95-based or Windows NT 4.0-based computers during the
	installation of Microsoft Internet Explorer 5 or after the installation of
	Internet Explorer 5 (without having to uninstall back to Microsoft Internet
	Explorer 4.x).
	
	You can use the Internet Explorer Administration Kit (IEAK) to create and
	distribute a customized Internet Explorer 5 installation package to install the
	Windows Desktop Update. For additional information about the IEAK, please see
	the following Microsoft Web site:
	
	  http://www.microsoft.com/windows/ieak/en/default.asp
	
	NOTE: If you are not a corporate administrator, you need to uninstall Internet
	Explorer 5 to add the Windows Desktop Update with Internet Explorer 4.01 Service
	Pack 2. For additional information about this procedure, please see the
	following Microsoft Knowledge Base article:
	
	  Q165695 How to Add or Remove Windows Desktop Update
	
	Note that installing the Active Desktop over an existing Internet Explorer 5.x
	installation by using this method may reset certain customizations such as the
	User Agent String and Custom Title Bars.
	
	MORE INFORMATION
	================
	
	How to Create an IEAK Package to Install the Windows Desktop Update:
	
	1. Download the IEAK using the steps on the IEAK site (listed in the "Summary"
	  section above) to register and obtain an IEAK license. You will receive both
	  a password to log on to the IEAK site and a 10-digit confirmation number that
	  allows you to gain access to the IEAK Wizard after it is installed.
	
	2. Run the IEAK Wizard.
	
	3. When the "Welcome to the IEAK" dialog box is displayed, click Next.
	
	4. When the "Gathering Information" dialog box is displayed, click Next.
	
	5. When the Company Name and Customization Code dialog box is displayed, type
	  your company name and customization code, click Corporate Administrator, and
	  then click Next.
	
	6. When the Platform Options dialog box is displayed, click Windows 9x/NT 4.0,
	  and then click Next.
	
	7. When the File Locations dialog box is displayed, click the destination folder
	  in which you want to create this build, and then click Next.
	
	8. When the Language Selection dialog box is displayed, click the appropriate
	  language, and then click Next.
	
	9. When the Media Selection dialog box is displayed, make the appropriate
	  selections, and then click Next.
	
	10. When the Feature Selection dialog box is displayed, click Uncheck All
	  Features, click Desktop Customization, and then click Next.
	
	11. When the Specifying Setup Parameters dialog box is displayed, click Next.
	
	12. When the Microsoft Download Site dialog box is displayed, click Next.
	
	13. When the Automatic Version Synchronization dialog box is displayed, make
	  sure all components have been synchronized by clicking Synchronize All, and
	  then click Next.
	
	14. When the Windows Desktop Update dialog box is displayed, click Yes, and then
	  click Next.
	
	15. When the "Customizing the Browser" dialog box is displayed, click Next.
	
	16. When the Wizard Complete dialog box is displayed, click Next, and then click
	  Finish.
	
	The Windows Desktop Update package is now ready to distribute.
	
	
	REFERENCES
	==========
	
	  Q165695 How to Add or Remove Windows Desktop Update
	
	  Q217644 Finding an IEAK Customization Code
	
	Additional query words: active desktop win95 winnt
	
	======================================================================
	Keywords          : kbinterop kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbIEsearch kbWin95search kbIEAKSearch kbZNotKeyword3 kbIEAK500
	Version           : :4.0,5.0,95
	Issue type        : kbinfo
	
	=============================================================================
	
