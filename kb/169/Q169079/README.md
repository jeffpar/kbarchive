---
layout: page
title: "Q169079: FP97: Error Message Connecting to FrontPage Editor"
permalink: /kb/169/Q169079/
---

## Q169079: FP97: Error Message Connecting to FrontPage Editor

	Article: Q169079
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbdta
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you start FrontPage Editor from within FrontPage Explorer, you receive the
	following error message:
	
	  Unable to connect to the FrontPage Editor.
	
	When you attempt to save a file to FrontPage Explorer from FrontPage Editor, you
	receive the following error message:
	
	  Could not make connection to the FrontPage Explorer. Please try to start the
	  FrontPage Explorer from the Start menu or the icon in the program group.
	
	CAUSE
	=====
	
	This error may result from any of the following conditions:
	
	- Illegal TCP/IP name
	
	- Resource limitations
	
	- Errors in the video subsystem
	
	- Registry errors
	
	- Missing registry keys
	
	- Missing FrontPage registry key
	
	- Mismatched OLE components on Windows NT
	
	- Problems with Windows installation
	
	RESOLUTION
	==========
	
	Start with the first method and proceed to the next method until the problem is
	corrected.
	
	Method 1: Illegal TCP/IP Name
	-----------------------------
	
	Check the name of the computer and correct it. For additional information, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q156909 FP: OLE Errors When Working With FrontPage
	
	Method 2: Resource Limitations
	------------------------------
	
	Make sure you have sufficient free resources. FrontPage 97 requires a minimum of
	16 megabytes (MB) of memory if you are running the Personal Web Server. If you
	are running other programs or services, they will be using resources that
	otherwise would be available to FrontPage. To free up resources, try either of
	the following:
	
	- Restart your computer.
	
	  -or-
	
	- Shut down all programs except for Windows Explorer and Systray.
	
	Method 3: Errors in Video Subsystem or Registry Errors
	------------------------------------------------------
	
	Start FrontPage Editor as a stand-alone program by double-clicking the
	Fpeditor.exe file in the \Program Files\Microsoft FrontPage\bin folder. Because
	FrontPage registers itself when you start it, it may be able to fix any registry
	errors related to it. If you still receive errors after starting FrontPage
	Editor, follow these steps.
	
	NOTES:
	
	- Do not replace any .dll files if FrontPage Editor starts.
	
	- Do not rename the Ntdll.dll file in step 1 if you are running Windows NT.
	
	1. Rename the following files, located in the Windows\System folder. These files
	  are hidden files.
	
	  Ntdll.dll
	  Avifil32.dll
	  Advapi32.dll
	
	2. From the Windows 95 compact disc, copy the three files listed in step 1 to
	  the Windows\System folder on your hard disk.
	
	  Try to run FrontPage Editor. If you still receive errors after performing
	  steps 1 and 2, follow these steps:
	
	  a. Rename the following files, located in the Windows\System folder. These
	     files are hidden files.
	
	  Dciman.dll
	  Dciman32.dll
	
	  b. From the Windows 95 compact disc, copy the two files mentioned in step a
	     to the Windows\System folder on your hard disk.
	
	3. Try to run FrontPage Editor again.
	
	Method 4: Undo Registry Cleaning Utilities
	------------------------------------------
	
	If you used a utility to clean the Registry (remove obsolete registry keys),
	restart the registry cleaning program and restore the Registry to its previous
	state. If the program does not provide a feature to restore previous Registry
	entries, go to Method 5.
	
	
	Method 5: Absence of Required Registry Keys
	-------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Microsoft has received reports that some computers appear to be "losing" the
	Registry settings that FrontPage needs to run properly. Microsoft has not
	determined why some computers are losing these Registry settings while other
	computers are not.
	
	If You Are Using Windows 95:
	
	Back up your registry, and then follow these steps:
	
	1. Download the Fp169079.exe file. The Fp169079.exe file is available to
	  download from the Microsoft Download Center:
	
	  FP169079.exe
	  (http://download.microsoft.com/download/fp97bonuspk/Update/1/WIN98/EN-US/FP169079.exe)
	
	  Release Date: September 11, 1997
	
	2. After you download it, double-click the Fp169079.exe file to extract its
	  contents.
	
	  The following two files will be stored on your hard disk:
	
	  Fix97.reg Aux97.reg
	
	3. Double-click the Fix97.reg file.
	
	4. When you receive a message indicating that the information was successfully
	  registered, click OK.
	
	  If you still receive the errors described in the "Symptoms" section of this
	  article, skip to Method 6.
	
	If You Are Using Windows NT 4.0:
	
	Back up the following registry keys:
	
	  HKEY_CLasses_Root HKEY_Current_User
	
	To back up these registry keys, follow these steps:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "regedt32 /v" (without the quotation marks).
	
	3. Open the HKEY_Classes_Root key and select the first folder in the left pane.
	
	4. On the Registry menu, click Save Key.
	
	5. Type a file name and select a location where you want to save this file.
	
	  NOTE: You should note the file name and location in case you need to restore
	  the Registry key.
	
	6. Open the HKEY_Current_User key and select the top folder in the left pane.
	
	7. Repeat steps 4 and 5.
	
	After you back up the registry keys, follow these steps:
	
	1. Download the Fp169079.exe file from the Microsoft Download Center.
	
	  The Fp169079.exe file is available to download from the Microsoft Download
	  Center:
	
	  FP169079.exe
	  (http://download.microsoft.com/download/fp97bonuspk/Update/1/WIN98/EN-US/FP169079.exe)
	
	2. After you download it, double-click the Fp169079.exe file.
	
	  The following two files will be copied to your hard disk:
	
	  Fix97.reg
	  Aux97.reg
	
	3. Double-click the Fix97.reg file.
	
	4. When you receive a message indicating that the information was successfully
	  registered, click OK.
	
	  If you still receive the errors described in the "Symptoms" section, follow
	  the steps in Method 6.
	
	Method 6: Missing FrontPage Registry Key
	----------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	On some computers, FrontPage 97 Setup does not create the following registry
	key:
	
	  [HKEY_CURRENT_USER\Software\Microsoft\FrontPage\Editor]
	  "Auxiliary DLL Registered For"="2.0.2.1112"
	
	The existence of this key affects how long it takes FrontPage to start. On
	computers where this Registry key is missing, FrontPage Explorer and FrontPage
	Editor time-out prematurely.
	
	It you determine that this key is missing from the Registry, use the following
	steps to install it.
	
	Windows 95:
	
	After you back up your Registry, follow these steps:
	
	1. Download the Fp169079.exe file from the Microsoft Download Center.
	
	  The Fp169079.exe file is available to download from the Microsoft Download
	  Center:
	
	  FP169079.exe
	  (http://download.microsoft.com/download/fp97bonuspk/Update/1/WIN98/EN-US/FP169079.exe)
	
	2. After you download it, double-click the Fp169079.exe file.
	
	  The following two files will be copied to your hard disk:
	
	  Fix97.reg
	  Aux97.reg
	
	3. Double-click the Aux97.reg file.
	
	4. When you receive a message indicating that the information was successfully
	  registered, click OK.
	
	Windows NT 4.0:
	
	Back up the following Registry keys:
	
	  HKEY_CLasses_Root
	  HKEY_Current_User
	
	To back up these Registry keys, do the following:
	
	1. On the Start menu, click Run.
	
	2. In the Open box, type "regedt32 /v" (without the quotation marks).
	
	3. Open the HKEY_Classes_Root key and select the first folder in the left pane.
	
	4. On the Registry menu, click Save Key.
	
	5. Type a file name and select a location where you want to save this file.
	
	  NOTE: You should note the file name and location in case you need to restore
	  the Registry key.
	
	6. Open the HKEY_Current_User key and select the top folder in the left pane.
	
	7. Repeat steps 4 through 5.
	
	After you back up the Registry keys, follow these steps:
	
	1. Download the Fp169079.exe file.
	
	  The Fp169079.exe file is available to download from the Microsoft Download
	  Center:
	
	  FP169079.exe
	  (http://download.microsoft.com/download/fp97bonuspk/Update/1/WIN98/EN-US/FP169079.exe)
	
	2. After you download it, double-click the Fp169079.exe file.
	
	  The following two files are stored on your hard disk:
	
	  Fix97.reg
	  Aux97.reg
	
	3. Double-click the Aux97.reg file.
	
	4. When you receive a message indicating that the information was successfully
	  registered, click OK.
	
	If you still receive the errors described in the "Symptoms" section, go to Method
	7.
	
	Method 7: Mismatched OLE Components on Windows NT
	-------------------------------------------------
	
	FrontPage 97 calls OLE32.dll and OLEAUT32.dll files when making the connection
	between FrontPage Explorer and FrontPage Editor. These files may make further
	calls to other elements of the OLE subsystem. In the event your installation of
	OLE has been improperly upgraded or has become mismatched, a full installation
	of the most recent Service Pack for Windows NT may solve the problem. If you
	have followed all of the previous steps without success, try installing the
	latest Windows NT Service Pack from the following Web site:
	
	  http://www.microsoft.com/ntserver/default.asp
	  (http://www.microsoft.com/ntserver/default.asp)
	
	NOTE: Follow the Service Pack Setup directions explicitly. Also, be sure to quit
	any programs which may use OLE before you install the service pack.
	
	If you still receive the errors described in the "Symptoms" section, you will
	need to reinstall Windows NT to a new folder.
	
	Method 8: Reinstall Windows
	---------------------------
	
	For additional information about how to reinstall Windows 95, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q142096 How to Reinstall Windows 95 to a New Folder
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	
	=============================================================================
	
