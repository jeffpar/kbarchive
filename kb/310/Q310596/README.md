---
layout: page
title: "Q310596: ST2002/MapPoint2002: Err Msg: Program Has Encountered an Error"
permalink: /kb/310/Q310596/
---

## Q310596: ST2002/MapPoint2002: Err Msg: Program Has Encountered an Error

{% raw %}

	Article: Q310596
	Product(s): Microsoft Automap
	Version(s): 1.0,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 05-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Streets & Trips 2002, version 1.0, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows XP 
	- Microsoft MapPoint 2002, used with:
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 4.0 
	   - the operating system: Microsoft Windows XP 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microsoft Streets & Trips 2002 or Microsoft
	MapPoint 2002, you may receive an error message similar to the following:
	
	  This program has encountered an error and will close.
	
	When you click the To see what data this error report contains click here link,
	the following information is displayed:
	
	  Error Details
	
	  This application is unable to continue running due to an internal error.
	  (6-40028--1073741819)
	
	  Error Signature
	
	  AppName: Streets.exe AppVer: 9.0.16.2001 ModName: PRNUI301.DLL
	  ModVersion: 0.2.0.0 Offset:0001bd57
	
	CAUSE
	=====
	
	This behavior can occur if a Canon BubbleJet printer or a Canon MultiPass multi
	function device printer is installed on your system. This behavior is caused by
	an incompatible Canon printer driver (or drivers).
	
	RESOLUTION
	==========
	
	To resolve this issue, update your printer drivers to the latest versions. If
	you are unable to obtain updated printer drivers, work around this issue by
	uninstalling the printer. To uninstall a printer, follow these steps:
	
	1. Log on to the computer as Administrator.
	
	2. Click Start, point to Settings, and then click Printers.
	
	3. Right-click the printer that you want, and then click Delete on the shortcut
	  menu that appears.
	
	4. Click Yes to confirm the removal of the printer.
	
	5. Rename the Prnui301.dll file. To do this, follow these steps:
	
	  a. Click Start, point to Search, and then click "For Files or Folders".
	
	  b. In the "Search for files or folders named" box, type "prnui301.dll"
	     (without the quotation marks).
	
	  c. In the "Look in" list, click My Computer, and then click Search Now.
	
	  d. In the Search Results pane, right-click Prnui301.dll and then click Rename
	     on the shortcut menu.
	
	  e. Type "prnui301.old" (without the quotation marks), and then press ENTER.
	
	6. Restart the computer.
	
	MORE INFORMATION
	================
	
	To download the latest Canon printer drivers, browse to the following Canon Web
	site:
	
	  http://www.usa.canon.com/support/files
	
	For information about how to contact Canon, click the appropriate article number
	in the following list to view the article in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words: ST2002
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2002
	Version           : :1.0,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
