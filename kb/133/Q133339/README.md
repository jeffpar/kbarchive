---
layout: page
title: "Q133339: Automating Client Services for NetWare (CSNW) Installation"
permalink: kb/133/Q133339/
---

## Q133339: Automating Client Services for NetWare (CSNW) Installation

	Article: Q133339
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Unattended or Computer Profile Setup (CPS), by default, Client
	Services for NetWare (CSNW) is not installed. However, you can accomplish
	automated installation of CSNW by modifying setup files.
	
	MORE INFORMATION
	================
	
	To automatically configure CSNW when you use an answer file with Windows NT
	Setup, modify the TXTSETUP.SIF, NTLANMAN.INF, AUTOEXEC.NT, and SYSTEM:
	
	WARNING: Modification of INF files may cause serious, system-wide problems before
	and after Setup and may require you to reinstall Windows NT to correct them.
	Microsoft cannot guarantee that any problems resulting from the modification of
	INF files can be solved. Make INF modifications at your own risk. Corporate
	Network Systems does not support the modification of INF files. For more
	information on INF files, refer to the Programmer's Guide included in the
	Windows NT DDK or contact Microsoft Consulting Services or a Solution Provider.
	
	1. Copy the \I386 directory from the Windows NT compact disc to your hard drive.
	
	2. Expand NTLANMAN.IN_, AUTOEXEC.NT_, and SYSTEM._ using the EXPAND.EXE
	  command.
	
	  The EXPAND.EXE file is located in the %SystemRoot%\SYSTEM32 directory.
	
	3. Make a backup copy of TXTSETUP.SIF and rename NTLANMAN.IN_, AUTOEXEC.NT_, and
	  SYSTEM._.
	
	4. Add the following to the [Files] section of the TXTSETUP.SIF file:
	
	        ;;; Added line below. <your_name>, <today's_date>
	        nwcfg.dll = dx,,,2,0,0
	
	  NOTE: The text ";;; Added line below. <your_name>, <today's_date>"
	  is an optional comment that Microsoft recommends you add for tracking and
	  easier troubleshooting in the future.
	
	5. Add the following to the [ServiceData] section of the NTLANMAN.INF file:
	
	        ;;; Added line below. <your_name>, <today's_date>
	        ServiceData_5      = "OEMNSVNW.INF","NWWKSTA",11,NWWKSTA
	
	  NOTE: The ServiceData_5 line must immediately follow the ServiceData_4 line.
	
	6. Add the following to end of the AUTOEXEC.NT file:
	
	   
	        REM Install netware redirector
	        lh %SystemRoot%\system32\nw16
	        lh %SystemRoot%\system32\vwipxspx
	   
	
	7. Run Registry Editor (REGEDT32.EXE) on another Windows NT system running CSNW.
	
	8. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     \SYSTEM\CurrentControlSet\Control\Print\Providers
	
	
	9. Choose the Save Key option from the Registry menu to save the Providers Key
	  to a file (for example: A:\PROVIDE.TMP).
	
	10. Choose the OK button.
	
	11. Make sure the HKEY_LOCAL_MACHINE window is highlighted by selecting it.
	
	12. Choose the LOAD HIVE option from the Registry menu.
	
	13. In the Load Hive dialog box, specify SYSTEM file that was expanded in Step 2
	  and choose the OK button:
	
	14. When prompted for Key Name, specify "Template System" (without the quotation
	  marks) and choose the OK button.
	
	15. Go to the key:
	
	  \Template System\CurrentControlSet001\Control\Print\Providers
	
	16. Choose the Restore option from the Registry menu and specify the file saved
	  in Step 9 above (for example: A:\PROVIDE.TMP).
	
	17. Choose the OK button.
	
	18. Select the Template System key.
	
	19. Choose the Unload Hive option from the Registry menu.
	
	20. Run Unattended Setup.
	
	For details on running Unattended Setup refer to the "Unattended Installation"
	section in Chapter 3 or the Windows NT Resource Kit.
	
	To automatically configure CSNW using computer profile setup (CPS):
	
	1. Upload the master system (must have CSNW installed) to the distribution
	  server.
	
	2. Modify the [ServiceData] section of %SYSTEMROOT%\SYSTEM32\DEFAULTS.INF on the
	  distribution server to appear as follows.
	
	  NOTE: DEFAULTS.INF lines in the following example that do not fit on one line
	  in this article but should be on one line in the DEFAULTS.INF file, have
	  several parts to it and are labeled as such to help you identify and modify
	  the correct lines. Be sure to remove the line labels if you copy this example
	  to the DEFAULTS.INF file:
	
	                line 1: [ServiceData]
	        line 2, part 1: !ServiceInfList =
	        line 2, part 2: {"OEMNSVSV.INF","OEMNSVWK.INF","OEMNSVNB.INF",
	        line 2, part 3: "OEMNSVRP.INF", "OEMNSVNW.INF"}
	        line 3, part 1: !ServiceOptionList = {"SRV","WKSTA","NETBIOS",
	        line 3, part 2: "RPCLOCATE","NWWKSTA"}
	                line 4: !ServiceBbList = {"3","2","5","11","11"}
	        line 5, part 1: !ServiceNameList = {"LanmanServer",
	        line 5, part 2: "LanmanWorkstation","NetBIOS","RPCLOCATOR","NWWKSTA"}
	
	3. Run WINNTP.EXE on the target system.
	
	For details on uploading the master system to the distribution server or running
	WINNTP.EXE from the target system read "Preinstalling Windows NT Using CPS" in
	Volume 1 of the Windows NT Resource Kit.
	
	Additional query words: prodnt upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbMSPressSearch kbWinNTS351search kbWinNTS350search kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.5,3.51
	
	=============================================================================
	
