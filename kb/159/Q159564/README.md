---
layout: page
title: "Q159564: NT 4.0 RESOURCE KIT UTILITIES Corrections and Comments"
permalink: /kb/159/Q159564/
---

## Q159564: NT 4.0 RESOURCE KIT UTILITIES Corrections and Comments

{% raw %}

	Article: Q159564
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and additional information relating
	to the CD-ROMs for the Microsoft Press books "Microsoft Windows NT Server 4.0
	Resource Kit" and "Microsoft Windows NT Workstation 4.0 Resource Kit."
	
	The following topics are covered:
	
	- CPS (Client Profile Setup) Utility Obsolete
	
	- Desktop Themes Crashes When JPEG Filter is Used
	
	- MAILSRV: Known issues, alternatives, and support policy
	
	- NTPERL5.HTM File Missing
	
	- RKTOOLS.HLP: Desktop Themes Install Instructions Incorrect
	
	- SYSDIFF.EXE: Unable to load sysdiff INF C:\RESKIT\sysdiff...
	
	- Sysdiff /diff "error=112" Caused By Insufficient Disk Space
	
	- Several NT 4.0 Resource Kit Utilities Missing
	
	- Service Monitor Requires Update After Password Change
	
	- TELNETD Service Does Not Install Properly
	
	- UPTOMP.EXE Error "Unable to locate the UPTOMP.INF file"
	
	- UPTOMP.EXE Does Not Copy WIN32K.SYS
	
	- Cannot Read Help Files Due To Missing WINHLP32.exe
	
	- Page 348 & 349: Addresses incorrect
	
	MORE INFORMATION
	================
	
	CPS (Client Profile Setup) Utility Obsolete
	-------------------------------------------
	
	The Client Profile Setup utility, or CPS, was a solution developed for Microsoft
	Windows NT 3.51. For the Microsoft Windows NT 4.0 Resource Kits, the CPS utility
	is no longer supported or developed.
	
	The new tools for automating Microsoft Windows NT 4.0 setup are setupmgr.exe and
	sysdiff.exe. For further information about these tools, please consult the
	Microsoft Windows NT 4.0 Resource Kit printed documentation or RKTOOLS.HLP.
	
	Desktop Themes Crashes When JPEG Filter is Used
	-----------------------------------------------
	
	Symptoms:
	Desktop Themes might crash (and generate a Dr. Watson log) with any of the
	following symptoms:
	
	 Exception number: c0000005 (access violation)
	 Exception:  access violation (Oxc0000005)
	 error in themes.exe
	 Desktop Themes closes without warning
	
	Correction:
	The Microsoft Windows NT Resource Kit team has developed a patch to address this
	problem for all Windows NT platforms. This patch is available for free download
	at the following ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	Note: You must have the original Windows NT 4.0 Desktop Themes program installed
	in order for the patch to work properly.
	
	
	Cause
	Microsoft Office 97 (and possibly other programs) installs a JPEG filter that is
	incompatible with the initial release of Desktop Themes included in the Windows
	NT 4.0 Resource Kit. This incompatibility is not a problem with Microsoft Office
	97. The only complete resolution is to obtain the Desktop Themes patch file.
	Workaround:
	To circumvent this issue without the patch, use the following steps:
	
	1. Open Desktop Themes
	
	2. Click the Save As button, then enter the theme named "Original
	  Settings.Theme" (without the quotation marks), and then click OK to save your
	  current settings as a theme
	
	  When you save or change the current theme settings, the Settings check boxes
	  become available. You now also have a desktop theme with a .BMP wallpaper.
	
	3. Uncheck the desktop theme wallpaper option before changing desktop themes,
	  and then set your theme as normal and click OK to save your change
	
	4. To change the desktop theme again, open the Desktop Themes program in the
	  Control Panel and then select the "Original Settings" theme. This theme has a
	  .BMP wallpaper and should not cause Desktop Themes to crash. After changing
	  the theme selection, you can once again disable the Wallpaper checkbox before
	  choosing a theme that has a JPEG wallpaper.
	
	If you wish to use the wallpapers without the patch, use another program to
	convert the appropriate .JPG file into a .BMP file, and then change the display
	background setting to the new .BMP file.
	
	Please e-mail RKINPUT@MICROSOFT.COM if you find additional information regarding
	this issue such as:
	
	- Other applications known to conflict with Desktop Themes
	
	- Other symptoms resolved by installing the Desktop Themes patch
	
	
	MAILSRV: Known issues, alternatives, and support policy
	-------------------------------------------------------
	
	Summary
	The Mail Server 1.1 utility (MailSrv) provided with the "Microsoft Windows NT
	Server Resource Kit, Version 4.0" was designed as a basic SMTP and POP3 mail
	server implementation. It was never designed or intended to be a
	mission-critical, secure, or enterprise-scale solution. Microsoft has developed
	two full-featured mail servers to provide superior functionality and
	reliability. Microsoft recommends implementing a more secure and reliable mail
	service than can be managed by the MailSrv utility, and for this reason MailSrv
	has been discontinued.
	
	More Information
	The following problems have been reported with the MailSrv utility on the
	Microsoft Windows NT Server 4.0 Resource Kit CD-ROM.
	
	- Mail sent to the MailSrv server is held in the spool directory and is not
	  distributed to the appropriate user.
	
	- Over a period of time, MailSrv might slowly take up to 100 percent of the
	  available CPU cycles. Stopping or restarting local mail delivery service,
	  POP3 service, and SMTP service will release the CPU cycles.
	
	The Resource Kit development team is aware of these problems and will post
	further information as it becomes available. However, the MailSrv utility is no
	longer included with the Microsoft Windows NT Resource Kit. MailSrv.Exe was not
	included on the "Microsoft Windows NT Server Resource Kit, Version 4.0,
	Supplement One" CD-ROM, and MailSrv will not be included with any future
	supplements or releases.
	
	Alternatives
	Microsoft produces two robust, secure, and full-featured mail service solutions
	for an enterprise system: Microsoft Exchange Server and Microsoft Commercial
	Internet System, formerly code-named Normandy.
	
	More information about Microsoft Exchange Server can be found on the following
	Web site:
	
	  http://www.microsoft.com/exchange/
	
	More information about Microsoft Commercial Internet System and other Microsoft
	enterprise solutions can be found at:
	
	  http://backoffice.microsoft.com/
	
	by clicking the Product Information hyperlink.
	
	If you are looking for a small-scale Windows NT mail server solution, you might
	find that a suitable freeware or shareware mail server is available. You can
	find a list of third party mail server vendors by going to the following Web
	site and searching for the Mail Server product category:
	
	  http://msdnisv.microsoft.com/communication/
	
	This site is subject to regular change, and most of the freeware and shareware
	hyperlinks are updated and replaced with newer links.
	
	NTPERL5.HTM File Missing
	------------------------
	
	NTPERL5.HTM is referenced in the following text files:
	\COMMON\COMMON\PERL\README.TXT and \SOURCE\GNU\PERL\README.TXT. However,
	NTPERL5.HTM is not on the NT Resource Kit CD-ROM.
	
	More information:
	The Windows NT 3.51 Resource Kit Update volume 2 contains NTPERL5.HTM and some
	additional files not found on the Windows NT 4.0 Resource Kit CD-ROM. This is
	because the PERL documentation files are an image of information posted on
	public domain Internet sites not controlled or authored by Microsoft.
	
	Correction:
	The following text should appear at the top of the above README.TXT files:
	
	***** PERL Documentation disclaimer *****
	The PERL HTML documentation including the following README.TXT was
	copied from public domain Internet sites.
	
	Microsoft does not claim responsibility for any inaccuracies or
	missing files related to the PERL scripting documentation
	included with the Microsoft Windows NT Resource Kit. Please
	note that NTPERL5.HTM is referenced in this file, but this file
	was not included on the file image for this Windows NT Resource
	Kit CD-ROM.
	***************************************************
	
	Microsoft is researching this issue and will post further information in this
	article when available.
	
	RKTOOLS.HLP: Desktop Themes Install Instructions Incorrect
	----------------------------------------------------------
	
	In the RKTOOLS.HLP section for Desktop Themes for Windows NT 4.0, the link to Run
	Desktop Themes will display installation instructions if Desktop Themes is not
	already installed. However, these instructions are incorrect.
	
	To properly install the Desktop Themes utility, insert the Windows NT Resource
	Kit CD-ROM and run the following command (where D: is assumed to be the CD-ROM
	drive letter):
	
	  D:\APPS\THEMES\SETUP.EXE
	
	SYSDIFF.EXE: Unable to load sysdiff INF C:\RESKIT\sysdiff...
	------------------------------------------------------------
	
	The following error message will occur if Sysdiff.inf is not in the directory
	containing SYSDIFF.EXE:
	
	  Unable to load sysdiff INF C:\RESKIT\sysdiff.inf.
	  This file is required in SNAP and DIFF modes. Consult the Windows
	  NT OEM Preinstall Kit documentation for more information.
	
	The information below is from the following Knowledge Base article:
	
	  Q159624 Err Msg: Incorrect Arguments. Consult the Windows NT
	
	Cause:
	The Windows NT 4.0 Resource Kit CD-ROM does not include the Sysdiff.inf file that
	is required for the Sysdiff tool to work properly.
	
	Resolution:
	To resolve this issue, use one of the following methods:
	
	- Use the Sysdiff tool from the Support\Deptools\<platform> folder on
	  your Windows NT 4.0 CD-ROM.
	
	- Copy Sysdiff.inf from your Windows NT 4.0 CD-ROM into the folder from where
	  you are running the Sysdiff tool.
	
	Status:
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Resource Kit
	version 4.0 and will post new information in the Microsoft Knowledge Base as it
	becomes available.
	
	Sysdiff /diff "error=112" Caused By Insufficient Disk Space
	-----------------------------------------------------------
	
	Sysdiff /diff tries to generate a difference file containing a list of
	differences between an earlier snapshot of the system and the system as it
	exists at the time /diff is used. If there is insufficient hard disk space to
	generate this file, error 112 will occur.
	
	Error 112 is a standard Win32 error code, and represents an "out of disk space"
	error. Please check to ensure sufficient hard disk space available.
	
	Note: If large amounts of changes were made since the initial snapshot, your
	diff_file will likewise be large. As per the Workstation Resource Guide Chapter
	2 (book online, index entry "Sysdiff utility"), "The information in the
	difference file includes all the binary files for the applications, as well as
	the initialization file settings and registry settings for the applications."
	You can also use the /log switch to trace the activities of Sysdiff during the
	/diff operation.
	
	Several NT 4.0 Resource Kit Utilities Missing
	---------------------------------------------
	
	The following Resource Kit utilities are mentioned in the
	\COMMON\COMMON\RKTOOLS.HLP file, but they are not present on the Windows NT
	Resource Kit CD-ROM:
	
	- GLOBAL.EXE*
	
	- LOCAL.EXE*
	
	- GRPCPY.EXE
	
	- SHOWMBRS.EXE**
	
	* GLOBAL.EXE and LOCAL.EXE have been completed for the Intel x86 platform and are
	available at the following ftp address:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	** SHOWMBRS.EXE is present on the Windows NT Workstation Resource Kit CD-ROM.
	
	More Information:
	These utilities were planned for release with the Windows NT 4.0 Resource Kit but
	were either incomplete or not stable when the Resource Kit released. Some
	utilities have been completed and added to the Windows NT ftp address. The
	Resource Kit team is working to provide the remaining utilities later either via
	the Resource Kit ftp site or in future updates or supplemental volumes of the
	Windows NT Resource Kit.
	
	Service Monitor Requires Update After Password Change
	-----------------------------------------------------
	
	The Service Monitor uses your domain\username, password. If your password changes
	the Service Monitor will no longer work correctly. To correct this - re-run the
	Service Monitor Configuration Wizard (smconfig.exe) and enter your new password.
	The configuration wizard will re-install the service based on this new
	password.
	
	TELNETD Service Does Not Install Properly
	-----------------------------------------
	
	The Telnet Server service does not install properly as described in TELNET.WRI.
	When adding the Telnet service, the instructions state to select the Remote
	Session Manager. However, the only selection available is Telnet Service Beta
	(Inbound Telnet).
	
	More Information:
	This issue has been addressed in a new OEMSETUP.INF file for the TelnetD service.
	To obtain a copy of the latest OEMSETUP.INF for TelnetD, connect to
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/ and download
	OEMSETUP.INF directly to your Resource Kit Telnet directory (typically
	C:\RESKIT\TELNET).
	
	If you do not have access to ftp, you can e-mail RKINPUT@MICROSOFT.COM with the
	following subject line:
	
	  TELNET OEMSETUP.INF REQUEST
	
	The RKINPUT alias will reply by sending a corrected OEMSETUP.INF.
	
	UPTOMP.EXE Error "Unable to locate the UPTOMP.INF file"
	-------------------------------------------------------
	
	Clicking on the Uni to Multiprocessor icon in the Start Menu causes the following
	error:
	
	  Unable to locate the UPTOMP.INF file. This file should be in the same
	  directory as the executable file or in the windows directory.
	
	Other error dialog boxes may follow as well.
	
	This error occurs because the Start Menu shortcut for UPTOMP.EXE does not set the
	working directory to the RESKIT directory. Changing the Start In shortcut
	property for the UPTOMP.EXE icon to C:\RESKIT will correct this problem for a
	default Resource Kit installation.
	
	Workaround:
	To successfully run the Uni to Multiprocessor conversion program, follow these
	steps:
	
	1. Click Start, then click Programs, and then click Command Prompt
	
	2. Change directory to your Windows NT Resource Kit directory. For instance:
	
	    CD \WINNT\NTRESKIT\ 
	
	3. Type "UPTOMP.EXE" (without the quotation marks) and then press Enter
	
	UPTOMP.EXE Does Not Copy WIN32K.SYS
	-----------------------------------
	
	UPTOMP.EXE, included with the "Microsoft Windows NT 4.0 Resource Kit" to assist
	in copying the correct files, does not copy the file WIN32K.SYS. This file needs
	to be copied for multiprocessor operation.
	
	An update to UPTOMP.INF is available to correct this problem and can be obtained
	from the following Internet ftp site:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/reskit/nt40/
	
	Workaround:
	To manually correct the UPTOMP.INF file, use the following steps:
	
	1. Open \RESKIT\UPTOMP.INF with Notepad or the editor of your choice.
	
	2. Add the following text directly below the line beginning with "Winsrv.dll":
	
	     win32k.sys = 0, 2, win32k.sys
	
	  Note: This new line must be entered above the black box that represents the
	  end-of-file marker for this file.
	
	If you already ran UPTOMP.EXE and can no longer boot to Windows NT, you might
	need to manually copy WIN32K.SYS from the Windows NT CD-ROM to your Windows NT
	System32 directory. If you can boot to Windows NT, change UPTOMP.INF as noted
	above and re-run UPTOMP.EXE.
	
	Cannot Read Help Files Due To Missing WINHLP32.exe
	--------------------------------------------------
	
	SYMPTOM
	When opening RKTOOLS.HLP or one of the other help files included on the Windows
	NT 4.0 Server or Workstation Resource Kit CD-ROM, you might receive the
	following error messages:
	
	  "This file is not a valid Windows help file."
	
	  "A newer version of help is required to view this file."
	
	CAUSE
	The Windows NT 4.0 Resource Kit help files require WINHLP32.EXE to be installed
	on the system. WINHELP.EXE will produce the errors listed above.
	
	RESOLUTION
	Check to make sure that WINHLP32.EXE is installed on your system.
	
	1. Click the Start button, then click Find, then click Files or Folders
	
	2. Type "WINHLP32.EXE" (without the quotation marks) in the Named field, and
	  then click the Find Now button
	
	If WINHLP32.EXE is not present, reinstall or expand this file from the Windows NT
	product CD-ROM.If WINHLP32.EXE is installed on the computer but WINHELP.EXE is
	still started when you open any help file, then use the following steps to check
	and update the application that is associated with Help files:
	
	1. Click the Start button, then click programs, and then click Windows NT
	  Explorer
	
	2. Click the View menu, and then click Options
	
	3. Click the File Types tab in the Options dialog box, then locate and select
	  the Help File registered file type, and then click the Edit button.
	
	4. Double-click the Open action. The default value for the "Application used to
	  perform this action" field should be:
	
	      C:\WINNT\system32\winhlp32.exe
	
	  Note that your system32 path directory might differ. If this field references
	  WINHELP.EXE instead of WINHLP32.EXE, update the field and then click OK.
	
	5. Click Close, and then click Close again to update the file association
	
	Page 348 & 349: Addresses incorrect
	-----------------------------------
	
	Page 348, second command line example:
	Change:
	
	Interface: 172.16.48.190
	Internet Address     Physical Address   Type
	172.16.80.138        00-20-af-ld-2b-91   dynamic
	172.16.90.32         00-60-8c-0e-6c-6a   static
	
	To:
	
	Interface: 172.16.113.190
	Internet Address     Physical Address   Type
	172.16.113.138       00-20-af-ld-2b-91   dynamic
	172.16.90.32         00-60-8c-0e-6c-6a   static
	
	Page 349, command line example:
	
	Change:
	
	Interface: 172.16.112.190
	Internet Address     Physical Address   Type
	172.16.112.138       00-20-af-ld-2b-91   dynamic
	
	To:
	
	Interface: 172.16.113.190
	Internet Address     Physical Address   Type
	172.16.113.138       00-20-af-ld-2b-91   dynamic
	
	0
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug ResKit FAQ REQUEST NT4.00 ntrk
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
