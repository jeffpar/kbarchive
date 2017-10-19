---
layout: page
title: "Q140600: Optimizing Windows 95 for Flight Simulator 5.1"
permalink: /kb/140/Q140600/
---

## Q140600: Optimizing Windows 95 for Flight Simulator 5.1

	Article: Q140600
	Product(s): Microsoft Home Games
	Version(s): MS-DOS:5.1; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbfile kbusage
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Flight Simulator for MS-DOS, version 5.1 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses how to set up your Microsoft Windows 95-based computer to
	run Microsoft Flight Simulator version 5.1 most efficiently, and it is divided
	into two parts:
	
	1. Optimizing Your Windows 95 Configuration for Flight Simulator
	
	  Running Microsoft Flight Simulator version 5.1 in Windows 95 sometimes
	  requires a specific system configuration. This Application Note gives steps
	  to optimally configure your computer to run Flight Simulator with Windows 95.
	  See the section "Part 1: Optimizing Your Windows 95 Configuration for Flight
	  Simulator" in this Application Note.
	
	2. Configuring Flight Simulator to Run in MS-DOS Mode
	
	  Microsoft Flight Simulator is an MS-DOS-based program. Although it runs in
	  Windows 95 protected mode, sometimes the program runs better in MS-DOS mode.
	  For information about running Flight Simulator in Windows 95 MS-DOS mode, see
	  the section "Part 2: Configuring Flight Simulator to Run in MS-DOS Mode" in
	  this Application Note.
	
	MORE INFORMATION
	================
	
	PART 1: OPTIMIZING YOUR WINDOWS 95 CONFIGURATION FOR FLIGHT SIMULATOR
	---------------------------------------------------------------------
	
	NOTE: This is a general guide for optimizing your system under Windows. Not all
	steps work for all machines. If your machine stops responding (hangs) when you
	restart your system (reboot), use the steps in the "Restarting a Non-Responding
	Computer" section in this Application Note.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type the following and click OK:
	
	  sysedit
	
	3. The System Configuration Editor starts. You should be able to view
	  configuration files such as Autoexec.bat, Config.sys, System.ini, and
	  Win.ini.
	
	4. The first file is usually the Autoexec.bat file. Type "rem" (without the
	  quotation marks) in front of every line. For example, if the line reads
	  C:\Mouse\Mouse, change the line to read:
	
	  rem c:\mouse\mouse
	
	  Repeat this step for each line in the Autoexec.bat file. When you are
	  finished, click Save on the File menu.
	
	5. Directly behind the Autoexec.bat file is the Config.sys file. Repeat step 4
	  for Config.sys. Don't forget to save your work.
	
	6. After completing steps 4 and 5, switch to the Win.ini file. If you do not see
	  it, locate it on the Window menu in System Configuration Editor.
	
	  a. On the Window menu, click Win.ini.
	
	  b. In Win.ini, look for the following lines:
	
	  Run=
	  Load=
	
	  c. If these lines contain entries, type a semicolon (;) in front of the line.
	     For example, if the Load= line looks like
	
	  Load=Pointer.exe
	
	     change it to look like:
	
	  ;Load=Pointer.exe
	
	  d. Save your changes.
	
	7. Exit the System Configuration Editor.
	
	8. Exit Windows 95, and restart your computer.
	
	9. When Windows 95 restarts, test your system. Check the following:
	
	   - Does sound work?
	   - Does the mouse work?
	   - Does the CD-ROM drive work?
	
	  Note any features that do not work.
	
	10. Click Start, point to Programs, and click MS-DOS Prompt. Change to the
	  Flight Simulator folder and start Flight Simulator.
	
	  If part of your system is not functioning, do the following:
	
	  a. Click Start, point to Settings, and then click Control Panel.
	
	  b. Double-click Add/Remove Hardware. This starts the Add New Hardware Wizard.
	     Click Next.
	
	  c. When you are asked if you want Windows to search for your new hardware,
	     click Yes. Click Next.
	
	  If no new hardware is detected, follow steps 1, 2, and 3 again. This time,
	  remove REM from the lines that contain the driver for the piece of hardware
	  that does not work. For example, if your Sound Card is not working, remove
	  REM from any line that refers to a sound device. Don't forget to save your
	  work.
	
	11. Restart your system, and start again at step 9. Do this until your computer
	  is working correctly.
	
	RESTARTING A NON-RESPONDING COMPUTER
	------------------------------------
	
	1. Restart your computer.
	
	2. When you see "Starting Windows 95" on your screen, press the F8 key.
	
	3. Click Safe Mode, which starts Windows 95 in a very basic configuration.
	
	4. Run Sysedit again, and remove the very last change you made in your
	  configuration.
	
	CREATING A FLIGHT SIMULATOR SHORTCUT IN WINDOWS 95
	--------------------------------------------------
	
	1. Double-click My Computer and open the Fltsim5 folder.
	
	2. With your right mouse button, click the Fs.bat file, and then click Create
	  Shortcut.
	
	  NOTE: A file called Shortcut to Fs is created.
	
	3. With your right mouse button, click the new file, and then click Properties
	  from the drop-down list.
	
	4. Click the Program tab.
	
	5. Make sure Close On Exit is selected.
	
	6. Click Advanced.
	
	  NOTE: Make sure the Prevent MS-DOS-Based Programs From Detecting Windows
	  option is selected.
	
	7. Click OK, and OK again.
	
	8. Double-click the shortcut to run Flight Simulator.
	
	OPTIONAL SHORTCUT MODIFICATIONS
	-------------------------------
	
	After the shortcut has been set up using the instructions above, you can rename
	the shortcut as follows:
	
	1. In My Computer or Windows Explorer, click the Shortcut to Fs file once. You
	  do not need to open it.
	
	2. On the File menu, click Rename.
	
	3. Type the new name and then press ENTER. For example, type "Flight Simulator"
	  (without the quotation marks).
	
	You may want to move the shortcut to a more convenient location, such as the
	Start menu. To move the icon to the Start menu, drag the icon over and on top of
	the Start button, release the mouse.
	
	For additional Start menu customization steps, do the following:
	
	1. Click Start, point to Settings, and then click Taskbar.
	
	2. Click the Start Menu Programs tab. Make additional changes here.
	
	PART 2: CONFIGURING FLIGHT SIMULATOR TO RUN IN MS-DOS MODE
	----------------------------------------------------------
	
	Microsoft Flight Simulator is an MS-DOS-based program. Although it runs in
	Windows 95 protected mode, sometimes the program runs better in MS-DOS mode.
	
	NOTE: Not all of these steps work for all machines. Some steps may need to be
	tailored for your individual computer. If your machine stops responding (hangs)
	when you restart (reboot) your system, use the steps in the "Restarting a
	Non-Responding Computer" section in this later in this article.
	
	HOW TO CREATE AN MS-DOS MODE SHORTCUT
	-------------------------------------
	
	Creating an MS-DOS-mode shortcut is like making a startup disk, without the disk.
	The shortcut allows you to make a special configuration for any MS-DOS program.
	There are no limitations to the number of shortcuts you can have.
	
	1. In Windows Explorer, open the folder that contains Flight Simulator, usually
	  Fltsim5.
	
	2. With your right mouse button, click Fs5.com, and then click Properties.
	
	3. Click the Program tab, and then click Advanced.
	
	4. You should be at the Fs5.com Advanced Properties screen. Make sure the MS-DOS
	  Mode option is selected.
	
	5. Notice there are two options available:
	
	   - Use Current Option
	
	  -and-
	
	   - Specify New Option
	
	  Select the Use Current Option if:
	
	  a. The existing Autoexec.bat and Config.sys files are sufficient to run
	     Flight Simulator in MS-DOS.
	
	  -or-
	
	  b. Flight Simulator runs in protected mode, but runs slower than usual.
	
	  -or-
	
	  c. Flight Simulator does not start in Windows 95, but there are no error
	     messages to indicate a specific reason.
	
	  Select the Specify New Option if:
	
	  a. Your computer configuration allows you to run Windows 95 without any
	     entries in the Autoexec.bat and Config.sys files.
	
	  -or-
	
	  b. The entries in the Config.sys and Autoexec.bat files do not contain a
	     Memory Manager.
	
	  -or-
	
	  c. The Config.sys and Autoexec.bat files do not contain a required mouse,
	     sound, or CD-ROM driver.
	
	  -or-
	
	  d. Your Config.sys and Autoexec.bat files do not meet the minimum
	     requirements to run a program in MS-DOS.
	
	SELECTING USE CURRENT
	---------------------
	
	If you select Use Current, click OK, and then click OK again to return to Windows
	Explorer. Test Flight Simulator by double-clicking Fs5.com.
	
	Windows 95 should quit, the computer should restart in MS-DOS mode, and Flight
	Simulator should start. When you end your Flight Simulator session, MS-DOS mode
	ends, and your computer restarts with Windows 95.
	
	SELECTING SPECIFY NEW
	---------------------
	
	If you select Specify New, or if the Use Current option did not work, you need to
	further configure your MS-DOS mode shortcut.
	
	The Specify New option has two additional boxes:
	
	- Config.sys for MS-DOS Mode
	- Autoexec.bat for MS-DOS Mode
	
	You need to create a suitable Config.sys and Autoexec.bat file for Flight
	Simulator.
	
	CREATING A CONFIG.SYS AND AUTOEXEC.BAT FILE FOR MS-DOS MODE
	-----------------------------------------------------------
	
	Use one of the methods below to create your Config.sys and Autoexec.bat files.
	Note that these methods assume Windows 95 is installed in the Windows folder on
	drive C. If you have installed Windows to a different folder or directory,
	replace the drive and folder names below with the appropriate folder and drive
	names.
	
	Method 1
	--------
	
	The Config.sys and Autoexec.bat files can be disabled by typing "rem" (without
	the quotation marks) in front of each line in the files. This method allows
	Windows 95 protected mode drivers to load. If you used this technique to
	optimize Windows 95, then use Method 1.
	
	1. Leave the Fs5.com Advanced Properties window open.
	
	2. Click Start, and then click Run.
	
	3. Type the following and click OK:
	
	  sysedit
	
	  The Autoexec.bat file with all the REM lines appears.
	
	4. On the Edit menu in System Configuration Editor, click Select All.
	
	5. On the Edit menu, click Copy.
	
	6. You can now minimize the System Configuration editor by clicking the Minimize
	  button (-) in the upper-right corner of the Window. The Editor should appear
	  as a taskbar button.
	
	7. At the Advanced Program Settings window, click the Autoexec.bat For MS-DOS
	  box. Then, with your right mouse button, click the box again, and click
	  Paste. You should now see the entire Autoexec.bat file, complete with the REM
	  codes.
	
	8. Repeat step 7 for the Config.sys file. Make sure you use the Config.sys For
	  MS-DOS Mode box.
	
	  Remove the REM codes from the lines that Flight Simulator needs to run. The
	  minimum requirements for the program are:
	
	  Config.sys for Flight Simulator
	
	     Device = C:\Windows\Himem.sys
	     Device = C:\Windows\EMM386.exe RAM
	     files=30
	     buffers=30
	     dos=high,UMB
	     devicehigh=C:\<directory of CD-ROM driver> \CDROM
	     driver...../d:<drive name>
	            (should say something like NEC_sys or Sanyo_IDE)
	
	  If you are running Stacker, DriveSpace(TM), or DoubleSpace, you should also
	  include the following line in the Config.sys file:
	
	     devicehigh=<compression device>
	
	  For example, if you are running DriveSpace, use the following:
	
	     devicehigh=c:\Windows\drvspace.sys /move
	
	  If you are running DoubleSpace, use the following:
	
	     devicehigh=c:\Windows\Dblspace.sys /move
	
	  Autoexec.bat for Flight Simulator
	
	     LH C:\Mouse\Mouse    (or whatever your mouse line is)
	     LH C:\Windows\Command\Mscdex.exe /D:<drive name should match the
	     drive designation in the config.sys>
	     Set Blaster  xx xx xx  (or any applicable sound device line;
	     there may be as many as 3)
	
	  Click OK, and then click OK to close Fs5.com Properties.
	
	9. Test Flight Simulator by double-clicking Fs5.com. Windows 95 should end and
	  the computer restarts automatically in MS-DOS mode using the Config.sys and
	  Autoexec.bat files you specified. Flight Simulator should start.
	
	  When you end your Flight Simulator session, MS-DOS mode ends, and your
	  computer restarts in Windows 95.
	
	Method 2
	--------
	
	The Config.sys and Autoexec.bat files must contain all the drivers required to
	run the hardware on your computer. Any copy of Autoexec.bat and Config.sys that
	worked on your machine previously is acceptable. When Windows 95 was installed,
	the setup program took the original Config.sys and Autoexec.bat files and
	renamed them as Autoexec.dos and Config.dos. These files are acceptable to use
	in this situation.
	
	1. Leave the Fs5.com Advanced Program Settings window open.
	
	2. Click Start, point to Programs, point to Accessories, and then click Notepad.
	
	3. On the File menu in Notepad, click Open.
	
	4. Select the drive C root directory, click Autoexec.dos, and click Open, where
	  drive C is where you installed Windows 95.
	
	5. On the Edit menu, click Select All.
	
	6. On the Edit menu, click Copy.
	
	7. Minimize Notepad and return to the Fs5.com Advanced Properties dialog box.
	  Click your mouse once in the Autoexec.bat box.
	
	8. With your right mouse button, click the box again, and then click Paste.
	
	9. Return to Notepad and repeat steps 4-8 for the Config.dos file.
	
	10. Close Notepad and return to the Fs5.com Advanced Properties dialog box.
	
	11. Remove any line not required for Flight Simulator to run. The minimum
	  requirements are:
	
	  Config.sys for Flight Simulator
	
	     Device = C:\Windows\Himem.sys
	     Device =C:\Windows\EMM386.exe RAM
	     files=30
	     buffers=30
	     dos=high,UMB
	     devicehigh=C:\<directory of CD ROM driver> \CDROM
	     driver...../d:<drive name>
	         (should say something like NEC_sys or Sanyo_IDE)
	
	  If you are running Stacker, DriveSpace, or DoubleSpace, you should also
	  include the following line in the Config.sys file:
	
	     devicehigh=<compression device>
	
	  For example, if you are running DriveSpace, use the following:
	
	     devicehigh=c:\Windows\Drvspace.sys /move
	
	  If you are running DoubleSpace, use the following:
	
	     devicehigh=c:\Windows\Dblspace.sys /move
	
	  Autoexec.bat for Flight Simulator
	
	     LH C:\Mouse\Mouse    (or what ever your mouse line is)
	     LH C:\Windows\Command\Mscdex.exe /D:<drive name should match the
	     drive designation in the config.sys>
	     Set Blaster  xx xx xx  (or any applicable sound device line.
	     There may be as many as 3)
	
	12. Click Apply, and then click OK to return to the original screen.
	
	13. Test Flight Simulator by double-clicking Fs5.com in Explorer.
	
	Windows 95 should quit and the computer should restart in MS-DOS mode using the
	Config.sys and Autoexec.bat files you just specified. Flight Simulator should
	start. When you end your Flight Simulator session, MS- DOS ends and your
	computer restarts with Windows 95.
	
	REFERENCES
	==========
	
	The information in this article is also available for download from the
	Microsoft Download Center.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Df1269.exe
	  (http://download.microsoft.com/download/fsim95/Update/1/W95/EN-US/Df1269.exe)
	
	Release Date: Jan-22-1996
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	Additional query words: 5.10 flightsim fltsim dos d_fltsim
	
	======================================================================
	Keywords          : kbenv kbfile kbusage 
	Technology        : kbOSWin95 kbOSWinSearch kbGamesSearch kbFlightSimSearch kbFlightSim510DOS kbSimSearch
	Version           : MS-DOS:5.1; WINDOWS:95
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	
