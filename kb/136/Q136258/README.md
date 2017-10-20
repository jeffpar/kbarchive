---
layout: page
title: "Q136258: HOWTO: Troubleshoot Visual C++ Setup Problems in Windows NT"
permalink: /kb/136/Q136258/
---

## Q136258: HOWTO: Troubleshoot Visual C++ Setup Problems in Windows NT

{% raw %}

	Article: Q136258
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to troubleshoot setup problems with Visual C++,
	32-bit Edition, in Windows NT. Because most developers are more familiar with
	troubleshooting 16-bit problems, this article also mentions 16-bit methods that
	do not carry over to 32-bit setup troubleshooting.
	
	Slight differences in a Visual C++ 5.0 or 4.0 setup versus Visual C++ 2.0 setup
	(such as the presence of an uninstall program) are noted here.
	
	MORE INFORMATION
	================
	
	The majority of 32-bit setup problems can be broken down into two areas:
	
	- Hardware failures, problems, or incompatibilities.
	
	  -or-
	
	- Bad or Corrupt installations.
	
	Each area is discussed in detail later in this article.
	
	Use the following general process to troubleshoot Visual C++ setup problems in
	Windows NT:
	
	1. If you receive an error message from the setup program or some other
	  component of Visual C++, try to search the Microsoft Knowledge Base for a
	  list of known problems by using words from that error message. The Microsoft
	  Knowledge Base (KB) is available on the services listed in the "References"
	  section at the end of this article.
	
	  The KB is a dynamic collection of articles. Significant new articles and
	  updated information is added daily. A snap shot of the Visual C++ 4.0
	  Knowledge Base is available on the product CD-ROM compact disc itself through
	  the integrated development environment.
	
	2. After running setup, if Visual C++ will not run at all, test the hardware
	  first by using ideas from the "Hardware Failures, Problems, or
	  Incompatibilities" section of this article. Then try using ideas from the
	  "Bad Software Installation" section of this article if necessary.
	
	3. If Visual C++ starts but does not work correctly, first test the installation
	  using the information in the "Bad Software Installation" section of this
	  article. Then try the "Hardware Failures, Problems, or Incompatibilities"
	  section of this article if necessary.
	
	HARDWARE FAILURES, PROBLEMS, OR INCOMPATIBILITIES
	-------------------------------------------------
	
	The problems you're experiencing may also show up in other applications. However,
	even if you are not having trouble with other CD-ROM-based applications, that
	does not necessarily mean that you won't have one of the problem discussed in
	this section.
	
	First, check the Event Log with the Event Log Viewer application located in the
	Administrative Tools program group. The Event Log records a number of actions
	that your Windows NT system performs, including many hardware and software
	failures. Bad events are usually shown by a stop sign icon on the right side of
	the list. By default, the list is sorted by date.
	
	If you see a number of stop signs for the same service or device, that sometimes
	indicates a hardware problem. Double-click the events to see if they all hold
	the same or related messages that indicate hardware device failures. Note,
	however, that even if there are no stop signs in the Event List, you may still
	have a hardware problem that was not detected by Windows NT.
	
	Step-by-Step Troubleshooting Process
	------------------------------------
	
	Failures of the CD-ROM drive or hard disk system are the most frequently
	encountered cause of setup problems. Check for possible causes in this order:
	
	1. Check for a bad SCSI termination. Most SCSI drives require a SCSI bus
	  terminator on the end of the SCSI cable. Event Log time-out events or a
	  number of the same type of failures from the SCSI or disk drive device can be
	  an indication that the SCSI bus has a missing or incorrect termination
	  resistor.
	
	2. Check to see if your hardware is on the Hardware Compatibility List (HCL).
	  The HCL can be found in Help file format in the Support directory of the
	  Windows NT distribution disk. Make sure all hardware drivers are correct and
	  compatible with Windows NT. Check the HCL for your machine manufacturer, your
	  hard disk maker, and your CD-ROM manufacturer. A number of IDE drives have
	  been known to cause problems in Windows NT. Check the HCL or your dealer for
	  the components in question. Microsoft specifically tested Windows NT with the
	  devices on the HCL list, so hardware on the list is known to function
	  correctly under Windows NT.
	
	  Contacting the device controller manufacturer for updated drivers and/or
	  firmware is always a good idea when incompatibilities are found, even for
	  hardware not on the HCL list.
	
	  You may also have other driver problems that only show up because of memory
	  conflicts with the CD-ROM driver or some other driver. Windows NT is a
	  symmetric multiprocessor operating system that can take advantage of multiple
	  CPUs. Some drivers are not designed to run on multiprocessor computers. If
	  you have a computer with more than one processor, check with the driver's
	  manufacturer to be sure it will function properly. Visual C++ and the Visual
	  C++ setup do not have any known problems running on multiprocessor machines.
	
	  You may also have loaded the wrong driver when you installed Windows NT. If
	  Windows NT did not automatically detect the hardware on your machine, make
	  sure you loaded the right drivers for your hardware.
	
	3. Check for bad sectors on your hard disk. Run Chkdsk from within a Windows NT
	  MS-DOS command prompt. If you find errors, fix them with Chkdsk /f. To check
	  for a media surface problem, use Chkdsk /r to do a surface scan of the drive
	  in question.
	
	  You may receive a message stating that the volume cannot be scanned because it
	  is currently in use. Answer Yes to the question of whether you would like to
	  schedule this drive for checking on the next system startup. In this case,
	  Windows NT will perform the check and/or fix the next time you reboot. Shut
	  down and restart the system to allow the check to occur.
	
	  These commands check the integrity of the file system and check the hard disk
	  surface itself for physical defects that may cause data loss. Chkdsk /r is
	  the equivalent of the using the MS-DOS Scandisk program. Scandisk will not
	  run under Windows NT or on an NTFS or HPFS drive while the machine is booted
	  into MS-DOS.
	
	  NOTE: This operation can take some time depending on the size of your hard
	  disk.
	
	4. Check for corrupted files on the hard disk. These problems are often caused
	  by the problems listed in steps 1 through 3. However, corrupted files can
	  also be caused by CD-ROM or hard disk drivers when the files are created
	  during the CD-ROM to hard drive copying process. This corruption usually
	  shows up when setup runs without errors but some component of Visual C++ will
	  not run.
	
	  For more complete information on troubleshooting CD-ROM problems in Windows or
	  Windows NT, please see the following articles in the Microsoft Knowledge
	  Base:
	
	  Q94653 Using FC.EXE to Verify CD-ROM File System Drivers
	
	
	  Q126380 Troubleshooting CD-ROM Problems in Windows NT
	
	
	  Use the MS-DOS or Windows NT File Compare program (Fc.exe) to compare the
	  files that have been copied from your CD-ROM drive to your hard drive as
	  follows:
	
	  FC /b [drive1:][path1]filename1 [drive2:][path2]filename2
	
	  The /B (binary) switch tells the File Compare program to run a binary compare
	  on the files. Comparing the files in the Bin subdirectory of the Visual C++
	  installation (\Msvc20\Bin or \MSDEV\BIN by default) with the Corresponding
	  directory on the CD-ROM disc will generally tell you fairly quickly if you
	  have a problem.
	
	  Note that the Visual C++ version 5.0 installation binds most of the EXEs and
	  DLLs for address fix up to achieve a faster startup of the Developer Studio
	  shell. For this reason, file compare cannot be used to check for corrupted
	  files in version 5.0.
	
	  NOTE: There are two files (Msvcshl.dll and Spyxx.exe) in the Bin subdirectory
	  that FC.exe will report as different. These two files are modified as part of
	  the installation process, and are therefore expected to be different.
	
	  If no errors are found in the Bin directory, check the entire Visual C++
	  installation using Fc.exe if Visual C++ still won't run.
	
	  If Fc.exe reports differences, be sure you have checked the problems listed in
	  steps 1 through 3. If these do not apply, your CD-ROM driver is likely the
	  cause. You have three choices at this point:
	
	  a. To be absolutely sure, delete the Visual C++ directory on your hard drive
	     and reinstall. Then use Fc.exe to check the installation again. If you
	     still receive a report of differences try one of the following two
	     choices.
	
	  b. If there are only a few corrupted files, use the Xcopy command to copy the
	     files from the CD-ROM disc to the destination location. Use the Fc.exe
	     command to compare the files again.
	
	  c. If you can, transfer the entire Msvc20 directory tree to a another
	     installation location. If you are on a network and have sufficient hard
	     drive space, use another computer with a working CD-ROM drive to copy the
	     Msvc20 tree to the hard drive. Then share out the hard drive, and try to
	     install the product from there. Use Xcopy /s to copy the Msvc20 tree from
	     the CD-ROM disc to your hard drive. Type Xcopy /? at Windows NT command
	     prompt for more information on using Xcopy. The directories for version
	     4.0 is MSDEV, and the directory for 5.0 is DEVSTUDIO. It may be advisable
	     to copy the whole CD image instead because, there are other components
	     which are installed for these two versions.
	
	     Alternatively, you can share out the CD-ROM drive on the other machine and
	     install from there.
	
	     NOTE: You cannot install using a UNC connection with versions before Visual
	     C++ 4.0.. You must connect to the hard drive using a NET USE command/File
	     Manager/Explorer. For more information, please see the following article
	     in the Microsoft Knowledge Base:
	
	  Q115327 FIX: SETUP.EXE Cannot Start via a UNC Connection
	
	5. Check for a bad CD-ROM compact disc. This is unlikely yet still possible.
	  Verify that the CD-ROM compact disc is bad by doing one of the following:
	
	   - Wipe the CD-ROM disc gently with a soft cloth to remove any smudges, dust,
	     or fingerprints. Be careful not to scratch it. Wiping outward from the
	     center is the recommended method for cleaning a CD-ROM disc. Any scratches
	     produced will be radial and less likely to affect data transfers. Inspect
	     the CD-ROM disc for deep scratches. These can also cause read errors.
	     Often these errors will show up in the Event Log as read errors from the
	     disk drive device.
	
	     -or-
	
	   - If another machine with a different CD-ROM drive is available, install on
	     that machine, and see if the installation works. If it does, you've
	     verified that your CD-ROM disc is not the problem.
	
	     -or-
	
	   - If you have another Visual C++ CD-ROM disc for the same Visual C++
	     version, use Fc.exe to compare the two for possible differences. You could
	     also install from this second CD-ROM disc. If everything installs and
	     works, then it is probable that the first one is bad. Call Visual C++
	     Product Support at the number included in your documentation that comes
	     with the product. Be sure to be prepared to repeat the tests that led you
	     to the conclusion that your CD-ROM disc was bad.
	
	BAD SOFTWARE INSTALLATION
	-------------------------
	
	Step-by-Step Troubleshooting Process
	------------------------------------
	
	1. Check the Microsoft Knowledge Base for known problems before troubleshooting
	  a problem that Microsoft has already tracked for you. The Microsoft Knowledge
	  Base is available on the services listed in the "References" section at the
	  end of this article.
	
	2. Check for Visual C++ corrupted Registry entries. If you are not familiar with
	  the Registry, be very careful following these instructions. Deleting the
	  wrong registry keys can cause many more problems.
	
	  Registry entries may be viewed or edited by using Regedt32.exe, which comes
	  with Windows NT. The registry is a database designed to hold information
	  about your entire Windows NT system. Visual C++ and other Microsoft
	  applications store configuration information in this area. For version 2.0,
	  you will find this information in the following key:
	
	     HKEY_CURRENT_USER\Software\Microsoft\Visual C++ 2.0
	
	
	  The 2.1 and 2.2 updates still use this key. A new registry entry with all
	  default values is generated the first time you run Visual C++ if there is no
	  registry entry for it.
	
	  For you to see this information, HKEY_CURRENT_USER must be the window in
	  focus. The other keys (Software, Microsoft, and so on) are contained in a
	  tree structure similar to the directory structure shown in File Manager. You
	  can select a registry key by using the mouse. Double-click the key to open up
	  any other branches below it.
	
	  Visual C++ version 4.0 uses the following registry keys:
	
	     HKEY_CURRENT_USER\Software\Microsoft\InfoViewer
	     HKEY_LOCAL_MACHINE\Software\Microsoft\Developer
	     HKEY_LOCAL_MACHINE\Software\Microsoft\InfoViewer
	
	
	  For the standard version of 4.0, the registry keys are:
	
	     HKEY_CURRENT_USER\Software\Microsoft\DeveloperStd
	     HKEY_CURRENT_USER\Software\Microsoft\InfoViewer
	     HKEY_LOCAL_MACHINE\Software\Microsoft\DeveloperStd
	     HKEY_LOCAL_MACHINE\Software\Microsoft\InfoViewer
	
	
	  For version 5.0, the registry keys are:
	
	     HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0
	     HKEY_LOCAL_MACHINE\Software\Microsoft\DevStudio\5.0
	     HKEY_CURRENT_USER\Software\Microsoft\InfoViewer\5.0
	     HKEY_LOCAL_MACHINE\Software\Microsoft\ InfoViewer\5.0
	
	
	  Other developer packages also use this these registry keys, so deleting the
	  entire key may make other developer applications nonfunctional. It is best to
	  use the Visual C++ uninstall program to remove version 4.0 and 5.0
	  installation and registry information.
	
	  Other developer packages also use this registry key, so deleting the entire
	  key may make other developer applications nonfunctional. It best to use the
	  Visual C++ uninstall program to remove version 4.0 installation and registry
	  information.
	
	  NOTE: Before trying this step, be certain that you have the correct key
	  selected (highlighted). If you delete another key, you may destroy valuable
	  information that your system or another application needs to run.
	
	  You can delete the Visual C++ registry tree by selecting it and then clicking
	  Delete on the menu. When this key is removed, Visual C++ can still be run,
	  but it may not have some of its parameters set properly.
	
	  Running parts of the Visual C++ interface may restore some of the registry
	  keys to their default values, but rerunning setup is the only way to fully
	  restore the registry. If you just need the registry entries and/or program
	  groups regenerated, it's best to run the 32-bit setup in the Msvc20 directory
	  on the Visual C++ CD-ROM disc with the /F option. Running the global setup in
	  the root directory of the CD-ROM disc will not pass the /F option on to any
	  other spawned setups. The /F option is useful because the icon groups and
	  registry entries are recreated but no files are actually be copied to the
	  hard drive. Be careful to chose the same options that you chose when you did
	  the original file copy installation, or Visual C++ may not work correctly. Go
	  to the MSDEV directory for version 4.0 and the DEVSTUDIO directory for
	  version 5.0.
	
	  If the problem is not fixed by deleting just the registry entries, the next
	  easiest step is to delete the entire Msvc20 or MSDEV or DEVSTUDIO directory
	  tree and also delete the Visual C++ registry Key as noted above. Reinstall
	  Visual C++ and test the installation again.
	
	  Again, in Visual C++ 4.0 and 5.0, use the unistall feature to remove registry
	  entries.
	
	3. Check for other corrupted Registry entries. To test this possibility, create
	  a new user account by clicking New User on the User Menu in the User Manager
	  application; User Manager is usually in the Administrative Tools group icon.
	  Then install Visual C++ when the new user is logged in. You can use setup
	  with the /F option, but keep the limitations described previously in mind.
	
	  If the software installs or runs correctly on the new account, the problem is
	  most likely caused by bad registry entries on the old account. If the problem
	  persists on the new account, the registry is probably not a factor.
	
	4. Check for other bugs or problems with setup. Search using vc20setup,
	  vc40setup, or vc50setup in the Microsoft Knowledge Base for a list of known
	  issues with the 32-bit Visual C++ setup program. Then read the following
	  section for other possible hints.
	
	OTHER TROUBLESHOOTING INFORMATION
	---------------------------------
	
	In 16-bit Windows, one of the first strategies to try in diagnosing setup
	problems is starting the computer in a "clean boot" configuration, which means
	all unnecessary commands are removed from the Config.sys and Autoexec.bat files.
	For more information about this, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q90511 What Is a Clean Boot for Windows for Workgroups?
	
	  Q87290 What Is a Clean Boot for Windows 3.1?
	
	  Q80448 What Is a Clean Boot for Windows 3.0?
	
	Under Windows NT, a clean boot is not the same thing. The following information
	was extracted from the Windows NT 3.5 Resource Kit Documentation:
	
	During system startup, Windows NT adds any Path, Prompt, and Set commands from
	the C:\Autoexec.bat file to the Windows NT environment variables, and then
	ignores the rest of the contents of C:\Autoexec.bat and C:\Config.sys. If these
	files are not present when you install Windows NT, the Setup program creates
	them. For a RISC-based computer, default Autoexec.nt and Config.nt files are
	created. The path and other Windows NT environment information are stored under
	the following Registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	      \Control\Session Manager\Environment
	
	When an MS-DOS-based application is started, Windows NT executes files specified
	in the application's .pif files or the Autoexec.nt and Config.nt files in the
	SystemRoot\System32 directory. Any changes made in one of these files take
	effect as soon as the file is saved and a new MS-DOS-based application is
	started that uses that file. You do not need to restart your system after
	changing the *.nt files.
	
	File                         Use in Windows NT
	-----------------------------------------------------------------------
	C:\Autoexec.bat              Path and environment variables added to
	                            the Windows NT environment at system
	                            startup.
	
	C:\Config.sys                Not used by Windows NT.
	
	Autoexec.nt and Config.nt    Files used every time an MS-DOS-based
	                            application in SystemRoot\SYSTEM32 is run
	                            with the _Default.pif. (Custom *.nt files
	                            can be created and used when starting an
	                            application from another .pif file.)
	
	You can use Windows NT Diagnostics to view the contents of the Autoexec.nt files
	and the Config.nt files by clicking items on the File menu. You can edit the
	contents of these files by using any text editor.
	
	Commands in the Autoexec.bat and Config.sys files for starting applications and
	initializing drivers are ignored in Windows NT.
	
	It's important to note that different settings are used for MS-DOS-based and
	32-bit console applications. Cl.exe and Link.exe are 32-bit DOS-extended
	applications, which means they load and run under Windows NT as native (console)
	applications. Currently, the only MS-DOS process invoked by the 32-bit edition
	of Visual C++ is the resource compiler (Rc.exe).
	
	For information on the Command Prompts and the four configuration files mentioned
	previously, please see the following articles in the Windows NT portion of the
	Microsoft Knowledge Base:
	
	  Q99279 MS-DOS-Based Applications and Command Prompts
	
	  Q93781 The Path Statement in Windows NT
	
	  Q124551 Configuring Parsing of the AUTOEXEC.BAT File
	
	For information on a known problem with Rc.exe in relation to these configuration
	files, please see the following article in the Microsoft Knowledge Base:
	
	  Q129415 PRB: "Bad command or file name" Error When RC.EXE Not Found
	
	Note that the information that used to be stored in the Win.ini and System.ini
	files has been replaced by registry entries, so making modifications to these
	files will not affect Windows NT itself. However, many 16-bit applications,
	including Visual C++ version 1.5x, still use System.ini for configuration
	information.
	
	REFERENCES
	==========
	
	The Microsoft Knowledge Base is available on the following services:
	
	- The World Wide Web (http://www.microsoft.com)
	
	- The Internet (ftp@microsoft.com)
	
	- The Microsoft Developer Library CD-ROM compact disc (Developer products)
	
	- The Microsoft Technet CD-ROM compact disc
	
	- MSN The Microsoft Network
	
	Additional query words: 3.5 3.50
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbVC200 kbVC210 kbVC220 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
