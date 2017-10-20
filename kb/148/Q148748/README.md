---
layout: page
title: "Q148748: XCLN: How to Change the Web Browser Association"
permalink: /kb/148/Q148748/
---

## Q148748: XCLN: How to Change the Web Browser Association

{% raw %}

	Article: Q148748
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 3.x and Windows NT, when the Microsoft Exchange or Outlook client is
	installed, the Internet Explorer is assigned as the WEB Browser by default.
	
	In Windows 95, when the Microsoft Exchange or Outlook client is installed, it
	will use the most-recently installed Win32 Web Browser.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To change the Web Browser that launches when embedded URLs are activated, follow
	these steps:
	
	In Windows 95:
	
	NOTE: For this to work, you must already have a Windows 95-compatible Browser
	installed such as Internet Explorer or Netscape Gold.
	
	1. Close any Web Browsers that may be running.
	
	2. Open Start/Settings/Control Panel/View/Options/File Types.
	
	3. Select URL:HyperText Transfer Protocol, and click the Edit button.
	
	4. Under Actions, select open, and click the Edit button.
	
	5. In the "Application used to perform action:" box, click the Browse button,
	  and locate the Browser that you want to launch.
	
	6. When you next launch an embedded URL from inside Microsoft Exchange, you will
	  be prompted to select this viewer as your default viewer; click Yes. This now
	  will become the default Web Browser for all URL-linked applications including
	  FTP, Mailto, News, and so on.
	
	CAUTION: By saying No to making this your default browser you may experience
	problems with some URLs.
	
	In Windows 3.x:
	
	NOTE: For this to work, you must already have a Windows 3.x-compatible Browser
	installed such as Internet Explorer or Netscape.
	
	For information on how to do this, please see the following article in the
	Microsoft Knowledge Base and the README.WRI file that is located on the
	Microsoft Exchange Client Software CD-ROM:
	
	  Q147359 XCLN W16: URL Problems with the Windows 16-bit Exchange Client
	
	In Windows NT:
	
	NOTE: For this to work, you must already have a Windows NT-compatible Browser
	installed such as Internet Explorer or Netscape.
	
	CAUTION: This involves Editing the client systems Registry, proceed only after
	you are certain that you understand the steps to be completed.
	
	After you have installed the Microsoft Exchange NT Client, you will need to edit
	the Registry if you are not going to use Internet Explorer, which is the
	default.
	
	Using REGEDT32.EXE open:
	
	  HKEY_LOCAL_MACHINE on local machine
	      SOFTWARE
	          Microsoft
	             Exchange
	              Client
	                    Options
	                        Browser : REG_SZ : "insert path to your browser"
	
	Additional query words: http htm html faq 8.0 8.01 8.02 8.03
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	
	=============================================================================
	

{% endraw %}
