---
layout: page
title: "Q216141: HOWTO: Disable IRDP Automatically Using WSH VBScript"
permalink: kb/216/Q216141/
---

## Q216141: HOWTO: Disable IRDP Automatically Using WSH VBScript

	Article: Q216141
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbOSWin
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a VBScript file that automatically disables
	IRDP (Internet Router Discovery Protocol) under Windows 98 or Windows 95 using
	Windows Script Host.
	
	MORE INFORMATION
	================
	
	
	IRDP can be disabled manually by adding "PerformRouterDiscovery" value name and
	setting it to a dword value of 0, under the following registry key(s):
	
	  HKLM\System\CurrentControlSet\Services\Class\NetTrans\####
	
	  Where #### is the binding for TCP/IP. More than one TCP/IP binding may exist.
	
	Please note that if you are using Windows 95 and want to run the script to
	disable IRDP, you need to install Wsh.exe from the MSDN Online Scripting MSDN
	Online Scripting (http://msdn.microsoft.com/scripting) Web site to enable
	Windows Script Host.
	
	NOTE: This procedure is not intended for home users with a few computers. IRDP is
	enabled on Windows 95 only after the Winsock 2 update is installed.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	Use the following line to run NO-IRDP.vbs from a login script:
	
	  Cscript \\<server>\<share>\NO-IRDP.VBS //T:5 //B
	
	Where <server> is the name of the server and <share> is the name of
	the share.
	
	  //T:5  Terminates the script after 5 seconds if it is still running.
	  //B    Tells the script to run in non-interactive mode.
	
	Sample Code
	-----------
	
	Using a text editor, create a VBScript file called NO-IRDP.vbs with the following
	lines:
	
	     '----------------------------------------------------------------------
	     ' The following script reads the registry value name IPAddress to
	     ' determine which registry entries are TCP/IP bindings and disables
	     ' IRDP (Internet Router Discovery Protocol).  For more info on IRDP
	     ' please read RFC 1256.
	     ' This sample checks the first 13 network bindings for TCP/IP, which 
	     ' is typically sufficient in most environments.
	     ' ---------------------------------------------------------------------
	     Dim WSHShell, NList, N, IPAddress, IPValue, RegLoc
	     Set WSHShell = WScript.CreateObject("WScript.Shell")
	
	     NList = array("0000","0001","0002","0003","0004","0005","0006", _
	                   "0007","0008","0009","0010","0011","0012")
	
	     On Error Resume Next
	     RegLoc = "HKLM\System\CurrentControlSet\Services\Class\NetTrans\"
	   
	     For Each N In NList
	       IPValue = ""      'Resets variable
	       IPAddress = RegLoc & N & "\IPAddress"
	       IPValue = WSHShell.RegRead(IPAddress)
	       If (IPValue <> "") then
	         PFRD = RegLoc & N & "\PerformRouterDiscovery"
	         WSHShell.RegWrite PFRD,"0","REG_DWORD"
	       end If
	     Next
	
	     WScript.Quit        ' Tells the script to stop and exit.<BR/>
	
	Additional query words: RFC1256 ICMP Router Solicitation 224.0.0.2
	
	======================================================================
	Keywords          : kbOSWin 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95
	Issue type        : kbhowto
	
	=============================================================================
	
