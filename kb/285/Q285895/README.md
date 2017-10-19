---
layout: page
title: "Q285895: No WMI Win32_POTSModem or Win32_POTSModemToSerialPort Returns"
permalink: /kb/285/Q285895/
---

## Q285895: No WMI Win32_POTSModem or Win32_POTSModemToSerialPort Returns

	Article: Q285895
	Product(s): Microsoft Systems Management Server
	Version(s): 1.5
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to retrieve instances from the Windows Management
	Instrumentation (WMI) Win32_POTSModem and Win32_POTSModemToSerialPort classes in
	Windows 95 or Windows 98, no instances are returned.
	
	CAUSE
	=====
	
	This problem occurs because the WMI provider does not retrieve Telephony API
	(TAPI) information.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Version         Size     File name    Platform
	  ----------------------------------------------------------
	  01/26/2001  1.50.1085.0048  513,488  Q285895.EXE  Intel
	
	NOTE: This hotfix is available only for WMI 1.5 in Windows 95 and Windows 98.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Client Hotfix Bundle Installation
	---------------------------------
	
	Method 1: Using the Hotfix Installer:
	
	1. Copy the Q285895.exe hotfix installer file to a local subfolder on the
	  affected computer that is running Windows 95 or Windows 98, or to a share on
	  your network. The Q285895.exe file is a Microsoft Windows Installer file that
	  updates a WMI component on your computer.
	
	2. Run the Q285895.exe file and follow the instructions in the wizard. You can
	  run this file in Quiet mode by using the /s switch.
	
	Method 2: Manual Installation:
	
	1. Copy the Q285895.exe hotfix installer file to a local subfolder on the
	  affected computer that is running Windows 95 or Windows 98, or to a share on
	  your network. The Q285895.exe file is a Microsoft Windows Installer file that
	  updates a WMI component on your computer.
	
	2. Run the Q285895.exe file with the /X (extract) switch.
	
	3. Click the Cimwin32.dll file, and then click OK.
	
	4. Select a location to which to save the file, and then click Save.
	
	5. Stop the Winmgmt process. To do this, click Start, click Run, type
	  "winmgmt.exe /kill" (without the quotation marks), and then click OK.
	
	6. Replace the Cimwin32.dll file in the Windows\System\Wbem folder with the
	  version that you extracted from the hotfix installer file.
	
	7. Winmgmt is started on demand; you do not need to restart it.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbOSWin98 kbOSWin95 kbOSWinSearch
	Version           : :1.5
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
