---
layout: page
title: "Q271283: Install SNA Server or HIS 2000 on Windows Terminal Server"
permalink: kb/271/Q271283/
---

## Q271283: Install SNA Server or HIS 2000 on Windows Terminal Server

	Article: Q271283
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbDSupport kbsna
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The installation of SNA Server/Host Integration Server 2000 (HIS) or SNA Server
	Client/HIS Client software on a computer that is running Microsoft Windows NT
	version 4.0 Terminal Server requires that certain files are registered as system
	global. Registering the files allows the software to work correctly in a
	multi-user environment. This is done by running the appropriate compatibility
	script after the software installation has been completed.
	
	No registration is necessary for Microsoft Windows 95, Microsoft Windows 98, or
	Windows NT SNA Server Clients/HIS Client or SNA Server/HIS software on a
	computer that is running Microsoft Windows 2000 Terminal Server (see step 4 in
	the "More Information" section).
	
	NOTE: Only SNA Server and SNA Client 4.0 Service Pack 3 (SP3) and later are
	supported on Windows 2000. For additional information, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q251320 Installing SNA Server on Windows 2000
	
	MORE INFORMATION
	================
	
	Use the following steps to install SNA Server/HIS or SNA Server Client/HIS
	Client software on a computer that is running Windows NT 4.0 or Windows 2000
	Terminal Server.
	
	For additional information about installing applications on computer that is
	running Windows NT 4.0 Terminal Server or Windows 2000 Terminal Server, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q186498 Terminal Server Application Integration Information
	
	  Q248340 Installing and Using Programs in Windows 2000 Terminal Services
	
	1. On the Terminal Server computer, either install through the Control Panel by
	  using the Add/Remove Programs tool, or through a DOS window. If you install
	  through a DOS window, at the command prompt, change to install mode by typing
	  the following command:
	
	  "change user /install" (without the quotation marks)
	
	2. Install SNA Server/HIS or SNA Server Client/HIS Client. For more information,
	  refer to the installation instructions found in your software documentation.
	
	3. After the software installation is complete, click Finish if you installed
	  through the Add/Remove Programs tool (which will return the system to execute
	  mode. Follow step 1 to return to install mode). If you installed through DOS,
	  make sure that the computer is still in install mode.
	
	  To that verify the Terminal Server computer is still in install mode, type the
	  following command at a command prompt:
	
	  "change user /query" (without the quotation marks)
	
	  NOTE: Do do not allow Setup to restart the system, if you are prompted.
	
	4. Run the appropriate compatibility script on Windows NT 4.0 Terminal Server,
	  based on the version of SNA Server/HIS or SNA Server Client/HIS Client that
	  is installed. The following compatibility scripts are available:
	
	  For Host Integration Server 2000:
	
	  The following scripts for Windows NT 4.0 Terminal Server are located on the
	  HIS compact disc in the Setup\TerminalServer folder:
	
	   - HIAdmin.cmd
	   - HIClient.cmd
	   - HIServer.cmd
	
	  For SNA Server 4.0 SP3:
	
	  The following scripts for Windows NT 4.0 Terminal Server are located on the
	  SNA Server 4.0 SP3 compact disc in the Trmsrv\Nt40 folder:
	
	   - Sna9xcli.cmd (run only if the Terminal Server file system is NTFS)
	   - Snantcli.cmd
	   - Snasrv.cmd
	
	  NOTE: Windows 2000 SNA Server and SNA Server Client scripts are included on
	  the SNA Server 4.0 SP3 CD in the Trmsrv\W2k folder and in the
	  <Wtsrvroot>\Application Compatibility Scripts\ folder in Windows 2000
	  Terminal Server. Because registration is not needed, do not run these
	  scripts.
	
	  For SNA Server 4.0 SP2:
	
	  For SNA Server 4.0 SP2, the compatibility scripts are located in the Trmsrv
	  folder. The following SNA Server Client scripts are available:
	
	   - SNA4sp2c.cmd (Windows NT client)
	   - SNA4sp29.cmd (Windows 95/Windows 98 client. You do not need to run this if
	     the Terminal Server file system is FAT.)
	
	  NOTE: For SNA Server and SNA Server Client 4.0 Service Pack 2 (SP2) and SP3,
	  do not run the compatibility scripts that are found in the Windows NT 4.0
	  Terminal Server CD.
	
	  For additional information, click the article numbers below to view the
	  articles in the Microsoft Knowledge Base:
	
	  Q247042 SNA Windows NT Client Fails on Windows 2000 Terminal Server
	
	  Q251349 3270 Applet Stops Responding at Blank Screen on Terminal Server
	
	  Q253314 SNABASE Not Started Error Occurs When Using Terminal Server
	
	  For SNA Server 3.0 SP3 and later:
	
	  For SNA Server 3.0, the compatibility scripts are located in the
	  Wtsrv\Application Compatibility Scripts folder. The following SNA Server and
	  Client compatibility script is available:
	
	  Mssna30.cmd (SNA Server or Client version 3.0)
	
	  The script registers the following SNA files as system global, which allows
	  the SNA Server/HIS or SNA Server Client/HIS Client to work correctly in a
	  multi-user environment:
	
	   - Snadmod.dll
	   - Snamanag.dll
	   - Wappc32.dll
	   - Dbgtrace.dll
	   - Mngbase.dll
	   - Snatrc.dll
	   - Snalm.dll
	   - Snanw.dll
	   - Snaip.dll
	   - Snabase.exe
	   - Snaservr.exe
	   - Snasii.dll
	   - Snalink.dll
	
	  NOTE: If you run the script from a command prompt, use a command prompt window
	  that was opened after the SNA Server/HIS or SNA Server Client/HIS Client
	  installation.
	
	5. You can shut down and restart the server if you are prompted to do so (when
	  the server restarts, it always starts in execute mode). If you are not
	  prompted to restart the computer after the installation is completed, at a
	  command prompt, return the Terminal Server computer to execute mode by typing
	  the following command:
	
	  "change user /execute" (without the quotation marks)
	
	At this point the SNA Server/HIS or SNA Server Client/HIS Client software is
	ready to run on the Terminal Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna 
	Component         : TerminalServices
	Technology        : kbAudDeveloper kbSNAServSearch kbHostIntegServ2000 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
