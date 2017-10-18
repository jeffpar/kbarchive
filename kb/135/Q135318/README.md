---
layout: page
title: "Q135318: How to Setup IBM CA/400 to Work Over the SNA 2.11 Win 3.x Client"
permalink: kb/135/Q135318/
---

## Q135318: How to Setup IBM CA/400 to Work Over the SNA 2.11 Win 3.x Client

	Article: Q135318
	Product(s): Microsoft SNA Server
	Version(s): 2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbinterop kbnetwork sna4
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.11, 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes setting up Client Access 400 (CA400) with the SNA Server
	2.11 or 3.0 Windows 3.x Client.
	
	MORE INFORMATION
	================
	
	To install CA400, follow these steps:
	
	1. Install the SNA Server Windows 3.x client software by running the Setup
	  program located in the \clients\win3x directory on the SNA Server 2.11 or 3.0
	  CD-ROM.
	
	2. Using Notepad or another text editor, edit the [WNAP] section of the WIN.INI
	  file so that the following values are modified as shown:
	
	        CA400=YES
	        CA400SharedFolders=YES
	
	3. In the [SNAServerEHNAPPC] section, add the following entry:
	
	  "LocalLU=<localLU>" (without the quotation marks)
	
	  The Local APPC LU alias can be found in SNA Server Admin. configured off the
	  SNA Server service. This Local LU must be partnered with a Remote APPC LU
	  associated with your AS/400 that is running OS/400 V3R1 or later.
	
	  The <localLU> parameter needs to be in all capital letters or several
	  errors may occur.
	
	4. Install the IBM Client Access/400 shared folders feature from the
	  installation disks by running the INSTALL.EXE program.
	
	5. After CA400 is installed, a dialog box appears telling you to restart
	  Windows. Do NOT click OK! Instead, go to the \CAWIN directory and rename the
	  following files:
	
	  "rename EHNAPPC.DLL EHNAPPC.IBM
	  rename EHNRTRW.DLL EHNRTRW.IBM" (without the quotation marks)
	
	6. Return to the CA/400 dialog box and choose OK to allow CA/400 to restart
	  Windows.
	
	7. After restarting Windows, CA400's setup will continue. In the dialog box that
	  appears, select the "Connect Type" as None. Choose OK. If installing v3.r1.m1
	  of CA/400, select "Other Router". You will then be prompted for a server
	  name. Specify the Remote LU Name you assigned in SNA Server configuration.
	
	
	8. After selecting OK, CA400 Setup will inform you that you need to restart
	  Windows again because the configuration has changed. Do it.
	
	9. After restarting, go into the CA400 folder and run the SETUP icon. You should
	  see the SNA Server Windows 3.x client icon (WNAP.EXE) start up automatically.
	  At this point, CA400 will attempt to log you into ANY AS400's you have
	  configured thru SNA Server Admin. If the dialog box that comes up is pointing
	  to an AS400 that is NOT running OSV3R1 (or better), press cancel. Do this
	  until the dialog presents an AS400 that is running OSV3R1. At this point,
	  enter the common user ID/Password for that system.
	
	10. With Client Access Setup open on your screen, select the icon for the
	  Rumba/400 install. When you select this option, CA400 will install Rumba/400
	  from the AS400 to your client.
	
	The following information is for reference purposes only. It shows the changes
	that may be made to system files. This may vary depending on what options you
	have chosen on your client.
	
	PCS.INI
	=======
	[PCS/400]
	INITCFG=NO
	GROUP=INS
	RUMBA=INS
	
	[Shared Folders]
	SFLR01=1,I
	
	[UPDT]
	UPDT01=I:\QPWXCWN,C:\CAWIN,S,,,Client Access/400
	UPDT02=I:\QPWXCRB\,C:\RUMBACAW,S,,,RUMBA/400
	
	[NETWORK]
	I:=0
	
	[ADVANCED]
	ExtraFunction=No
	
	NSD.INI
	=======
	[Configuration]
	LANGUAGE=2924
	DIRECTORY=C:\CAWIN
	COMMONUSERID=
	LOCALLUNAME=
	DLCTYPE=NonNSWin
	RTDN=
	
	[MODES]
	QPCSUPP=*, 2, 32, 16
	QSERVER=*, 2, 32, 16
	SNASVCMG=256, 1, 2, 1
	BLANK=,2, 8, 4
	#BATCH=256, 3, 8, 4
	#INTER=, 7, 8, 4
	
	WIN.INI
	=======
	[SnaServerEHNAPPC]
	LocalLu=DONALD
	DILBERT=SNA
	
	[Wnap]
	WBinPath=C:\SNA.WIN
	Remote=DISNEYWORLD
	LocalFlag=LOCAL
	NosType=LANMAN
	NosSetup=WFW
	NetSetup=NO
	CA400=YES
	CA400SharedFolders=YES
	
	[CAWIN]
	EHNP=C:\CAWIN
	EHNL=2924
	
	[CAMAPI]
	HLL=C:\RUMBACAW\EEHLLAPI.DLL
	
	SYSTEM.INI
	==========
	[386Enh]
	device=C:\CAWIN\VREFLECT.386
	device=C:\CAWIN\VNSWUTIL.386
	device=C:\CAWIN\VNCD.386
	
	AUTOEXEC.BAT
	============
	Autoexec.bat
	C:\DOS\SMARTDRV.EXE /L /X 2048 128
	LH /L:1,40688 C:\DOS\MSCDEX.EXE /S /d:aspicd0 /m:12
	@ECHO OFF
	PROMPT $P$G
	path c:\wfw311;c:\dos;C:\SNA.WIN;C:\RUMBACAW;c:\CAWIN;
	SET TEMP=C:\TEMP
	C:\WFW311\net start
	
	Additional query words: prodsna
	
	======================================================================
	Keywords          : kbinterop kbnetwork sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ211 kbSNAServ400
	Version           : :2.11,3.0,4.0
	
	=============================================================================
	
