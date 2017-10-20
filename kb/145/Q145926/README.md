---
layout: page
title: "Q145926: How to Troubleshoot Windows 95 Shutdown Problems"
permalink: /kb/145/Q145926/
---

## Q145926: How to Troubleshoot Windows 95 Shutdown Problems

{% raw %}

	Article: Q145926
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbtshoot win95kbfaq
	Last Modified: 08-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes troubleshooting steps that may help you solve shutdown
	and restart problems in Windows 95. This information is also available in our
	Windows 95 Startup and Shutdown Troubleshooting Wizard. We recommend using this
	wizard, but we have also created this text-based article for your convenience.
	The Windows 95 Startup and Shutdown Troubleshooting Wizard is located on:
	
	  http://support.microsoft.com/support/tshoot/default.asp
	
	NOTE: Due to architectural differences between Microsoft Windows 98 and Windows
	95, this information should not be used to troubleshoot Windows 98-based
	computers.
	
	MORE INFORMATION
	================
	
	When Windows 95 shuts down it performs many functions, including the transition
	of all protected-mode drivers back to real mode, the completion of all disk
	write functions and flushing of the disk cache, and the closing of all currently
	running programs, which includes running the Close Window code for any
	applications that are running. When Windows 95 does not shut down properly, it
	may appear to stop responding (hang) for several minutes, holding at the "Please
	wait while your computer shuts down" screen.
	
	Shutdown problems in Windows 95 can be caused by an incompatible, damaged, or
	conflicting device driver, a damaged exit sound file, or incorrectly configured
	or damaged hardware. To troubleshoot this problem, perform the following steps:
	
	1. Determine if the shutdown problem is caused by a program loading from the
	  Startup folder. To do so, follow these steps:
	
	  a. Reboot the computer and press the SHIFT key until Windows 95 loads.
	
	  b. Click the Start button, and then click Shut Down.
	
	  c. Click Shut Down The Computer, and then click Yes. Wait three minutes for
	     Windows 95 to shut down.
	
	  If Windows 95 does not hang, a program being loaded in the Startup folder may
	  be causing the problem.
	
	  To determine which program is causing the shutdown problem, remove the icons
	  from the Startup folder one at a time. To do so, follow these steps:
	
	  a. Click the Start button, point to Settings, and then click Taskbar.
	
	  b. Click the Start Menu Programs tab, and then click Advanced.
	
	  c. Double-click the Programs folder, and then double-click the Startup
	     folder.
	
	  d. Drag any icon from the Startup folder to the Programs folder and then
	     restart the computer.
	
	  e. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  f. Repeat steps A-E until the shutdown problem no longer occurs.
	
	  Once the program causing the shutdown problem has been identified, contact the
	  program's manufacturer for assistance. If removing all the icons from the
	  Startup folder does not resolve the problem, continue with these steps.
	
	2. Determine if the shutdown problem is caused by a command line loading
	  automatically from the Win.ini file. To do so, follow these steps:
	
	  a. Click the Start button, click Run, type "sysedit" (without the quotation
	     marks) in the Open box, and then click OK.
	
	  b. Click the Win.ini window.
	
	  c. Locate the "Load=" and "Run=" lines in the Win.ini file. Place a semicolon
	     (;) at the beginning of each line.
	
	  d. Save the changes to the Win.ini file and then quit System Configuration
	     Editor.
	
	  e. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 does not hang during shutdown, the problem may be caused by a
	  program being loaded from the "Load=" or "Run=" line in the Win.ini file. To
	  determine which program is causing the problem, follow these steps:
	
	  a. Click the Start button, click Run, type "sysedit" (without the quotation
	     marks) in the Open box, and then click OK.
	
	  b. Click the Win.ini window.
	
	  c. Create new "Load=" and "Run=" lines in the Win.ini file. Add one command
	     from the original lines.
	
	  d. Save the file, and then quit System Configuration Editor.
	
	  e. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  f. Repeat steps A-B, add one more command from the original lines, and then
	     repeat steps D-E. Repeat this process until Windows 95 hangs during the
	     shutdown process.
	
	  g. Repeat steps A-B, remove the program causing the problem from the "Load="
	     or "Run=" line, and then repeat steps D-E.
	
	  h. After you have identified the program causing the problem, contact the
	     program's manufacturer for assistance. If these steps do not resolve the
	     problem, continue with step 3.
	
	3. Determine if the problem is being caused by a command being loaded in the
	  Autoexec.bat or Config.sys file. To do so, follow these steps:
	
	  a. Restart Windows 95. When you see the "Starting Windows 95" message, press
	     the F8 key, and then choose Step-By-Step Confirmation from the Startup
	     menu.
	
	  b. Press Y at each of the following prompts. Press N for any other prompts:
	
	      - Load Doublespace driver
	
	      - Process the system registry
	
	      - DEVICE=C:\WINDOWS\HIMEM.SYS
	
	      - DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	      - Load the Windows graphical user interface
	
	      - Load all Windows drivers
	
	  c. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 shuts down properly, the problem may be caused by a command line
	  in the Autoexec.bat or Config.sys file. To determine which line is causing
	  the problem, follow these steps:
	
	  a. Restart Windows 95. When you see the "Starting Windows 95" message, press
	     the F8 key, and then choose Step-By-Step Confirmation from the Startup
	     menu.
	
	  b. Press Y for each of the following prompts, plus one additional command.
	     Press N for all other prompts:
	
	      - Load Doublespace driver
	
	      - Process the system registry
	
	      - DEVICE=C:\WINDOWS\HIMEM.SYS
	
	      - DEVICE=C:\WINDOWS\IFSHLP.SYS
	
	      - Load the Windows graphical user interface
	
	      - Load all Windows drivers
	
	  c. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  d. Repeat steps A-C until the problem occurs.
	
	  When the problem occurs, you have identified the command causing the problem.
	  Edit the file containing the command and disable the command. If these steps
	  do not resolve the problem, continue with step 4.
	
	4. Determine if the problem is being caused by a memory conflict that still
	  exists when Emm386.exe is not loaded from the Config.sys file. To do so,
	  follow these steps:
	
	  a. Click the Start button, click Run, type "sysedit" (without the quotation
	     marks) in the Open box, and then click OK.
	
	  b. Click the Config.sys window.
	
	  c. In the Config.sys file, make sure the following lines exist in this
	     order:
	
	         device=c:\windows\himem.sys
	         device=c:\windows\emm386.exe noems x=a000-f7ff
	
	  d. Save the Config.sys file, and then quit System Configuration Editor.
	
	  e. Restart the computer.
	
	  f. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 shuts down properly, the problem may be caused by a memory
	  conflict that still exists when Emm386.exe is not loaded from the Config.sys
	  file. For information about determining the exact location of the memory
	  conflict, please see the following article in the Microsoft Knowledge Base:
	  Q112816 Locating and Excluding RAM/ROM Addresses in the UMA If these steps do
	  not resolve the problem, continue with step 5.
	
	5. Determine if the problem is being caused by a virtual device driver being
	  loaded from the System.ini file. To do so, follow these steps:
	
	  a. Click the Start button, click Run, type "sysedit" (without the quotation
	     marks) in the Open box, and then click OK. Click the System.ini window.
	
	  b. Locate the [386Enh] section of the file.
	
	  c. In the [386Enh] section, place a semicolon (;) at the beginning of each
	     line that begins with "Device=" and ends with ".386".
	
	  d. Save the System.ini file, and then quit System Configuration Editor.
	
	  e. Restart Windows 95.
	
	  f. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 does not hang during the shutdown process, the problem may be
	  caused by a virtual device driver being loaded in the System.ini file. To
	  determine which driver is causing the problem, follow these steps:
	
	  a. Click the Start button, click Run, type "sysedit" (without the quotation
	     marks) in the Open box, and then click OK. Click the System.ini window.
	
	  b. Locate the [386Enh] section of the file.
	
	  c. Remove one of the semicolons that you added in step C above.
	
	  d. Save the System.ini file, and then quit System Configuration Editor.
	
	  e. Restart Windows 95.
	
	  f. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  g. Repeat steps A-F until the problem reoccurs.
	
	  When the problem reoccurs, you have identified the virtual device driver
	  causing the problem. Contact the driver's manufacturer for assistance. If
	  these steps do not resolve the problem, continue with step 6.
	
	6. Determine if the shutdown problem is being caused by a damaged exit sound
	  file. To do so, follow these steps:
	
	  a. In Control Panel, double-click Sounds.
	
	  b. In the Events box, click Exit Windows.
	
	  c. In the Name box, click None.
	
	  d. Click OK.
	
	  e. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 does not hang during the shut down process, the problem may be
	  caused by a damaged exit sound file. Restore the sound file from a backup, or
	  reinstall the program that provided the sound file. If these steps do not
	  resolve the problem, continue with step 7.
	
	7. Determine if Advanced Power Management (APM) is causing the shutdown problem.
	  To do so, disable it by following these steps.
	
	  NOTE: Not all computers have APM features. If your computer does not have APM
	  features, skip to step 8.
	
	  a. In Control Panel, double-click System, and then click the Device Manager
	     tab.
	
	  b. Double-click the System Devices branch to expand it.
	
	  c. Double-click Advanced Power Management in the device list, click the
	     Settings tab, and then click the Enable Power Management check box to
	     clear it.
	
	  d. Click OK until you return to Control Panel.
	
	  e. Restart Windows 95.
	
	  f. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 shuts down properly, the problem may be caused by APM. Contact
	  the computer's manufacturer for assistance. If these steps do not resolve the
	  problem, continue with step 8.
	
	  For additional information about shutdown problems with APM enabled, please
	  see the following article in the Microsoft Knowledge Base: Q136651 Shutdown
	  Hangs After "Please Wait While..." Screen
	
	8. Determine if the shutdown problem is caused by the Windows 95 file system
	  settings. To do so, follow these steps:
	
	  a. In Control Panel, double-click System, and then click the Performance tab.
	
	  b. Click File System, and then click the Troubleshooting tab.
	
	  c. Click all the check boxes to select them.
	
	  d. Click OK, click Close, and then click Yes.
	
	  e. Restart Windows 95.
	
	  f. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 shuts down properly, the problem is related to the File System
	  settings. If these steps do not resolve the problem, continue with step 9.
	
	9. Determine if a Windows 95 device driver is causing the shutdown problem, or
	  if a device installed in your computer is configured incorrectly or is not
	  functioning properly. To do so, follow these steps:
	
	  a. In Control Panel, double-click System, and then click the Hardware
	     Profiles tab.
	
	  b. Click the hardware profile that you are currently using, and then click
	     Copy.
	
	  c. Type "Test Configuration" in the To box, and then click OK.
	
	  d. Click the Device Manager tab.
	
	  e. Double-click any device, and then click the Test Configuration check box
	     to clear it. Repeat this step until you have disabled all devices. Do not
	     disable any system devices.
	
	  f. When you are prompted to restart Windows 95, click No.
	
	     NOTE: If you disable a PCI hard disk controller, choose Yes to restart
	     Windows 95. PCI hard disk controllers cannot be unloaded dynamically.
	
	  g. Restart Windows 95. When Windows 95 restarts, you receive the following
	     message:
	
	         Windows cannot determine what configuration your computer is in.
	         Select one of the following:
	
	     Choose Test Configuration from the list of configurations. As Windows 95
	     starts, you receive the following error message:
	
	         Your Display Adapter is disabled. To correct the problem, click
	         OK to open Device Manager.
	
	     Click Cancel. When the Display Properties dialog box opens, click Cancel.
	
	  h. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  If Windows 95 shuts down properly, the problem may be caused by a Windows 95
	  device driver or a device installed in your computer that is configured
	  incorrectly or is not functioning properly. To determine which device driver
	  or device is causing the problem, follow these steps:
	
	  a. In Control Panel, double-click System, and then click the Device Manager
	     tab.
	
	  b. Double-click a device that you disabled in step E above, and then click
	     the Test Configuration check box to select it.
	
	  c. When you are prompted to restart Windows 95, click Yes.
	
	  d. Shut down Windows 95. Wait for Windows 95 to shut down.
	
	  e. Repeat steps A-D until the problem reoccurs. When the problem reoccurs,
	     you have identified the device or device driver causing the problem.
	
	  NOTE: If the shutdown problem is being caused by a Plug and Play device that
	  is configured incorrectly or is not functioning properly, removing the device
	  from the current hardware profile will correct the problem. After you remove
	  the device from the current hardware profile and restart Windows 95, the
	  drivers associated with the device are removed from memory and the shutdown
	  problem does not occur. However, as Windows 95 starts, the Plug and Play
	  device will be detected automatically and installed in the current hardware
	  profile. When you restart Windows 95 a second time, the drivers associated
	  with the device are again loaded in memory and the shutdown problem returns.
	
	  If Windows 95 continues to hang on shutdown after you complete steps A-H,
	  reinstall Windows 95 to a different folder to rule out the possibility of
	  damaged files. For example, if Windows 95 is currently installed in the
	  Windows folder, install it to a Win95 folder. If your computer has a Plug and
	  Play BIOS, reinstall Windows 95 using the "setup /P I" command to rule out a
	  defective Plug and Play BIOS.
	
	  If Windows 95 still hangs during the shutdown process after you reinstall it,
	  your computer may have faulty hardware or faulty system components including
	  RAM, the CPU, the motherboard, or an internal or external cache. Contact your
	  computer's manufacturer for assistance.
	
	10. View the Bootlog.txt file to pinpoint the problem.
	
	  If Windows 95 still hangs during the shutdown process, examine the
	  Bootlog.txt file for "Terminate=" entries. These entries are located at the
	  end of the file and may provide clues as to the cause of the problem.
	
	  Each "Terminate=" entry should have a matching "EndTerminate=" entry on a
	  successful shutdown. If the last line in the Bootlog.txt file is
	  "EndTerminate=KERNEL," Windows 95 shut down successfully. If the last line
	  in the Bootlog.txt file is one of the following entries, check the listed
	  possible cause:
	
	      Last line                  Possible cause
	      -------------------------------------------------------------------
	      Terminate=Query Drivers    Possible QEMM or other memory manager
	                                 issue.
	
	      Terminate=Unload Network   Possible conflict with real-mode network
	                                 driver in the Config.sys file.
	
	      Terminate=Reset Display    Disable video shadowing. You may also
	                                 need an updated video driver.
	
	      Terminate=RIT              Possible timer-related problems with the
	                                 sound card or an old mouse driver.
	
	      Terminate=Win32            Problem with a 32-bit program blocking
	                                 a thread. Possibly Microsoft Visual C
	                                 for Windows.
	
	11. If the previous steps in this article do not resolve the problem, try
	  resetting the computer's CMOS settings back to the factory defaults. For
	  information about changing CMOS settings in your computer, please consult
	  the computer's documentation or manufacturer.
	
	  WARNING: Before you reset the computer's CMOS settings back to the factory
	  defaults, make sure to write down the CMOS settings.
	
	NOTE: The PC Speaker driver (Speaker.drv) can cause Windows 95 to stop responding
	at shutdown or startup. To disable the PC Speaker driver, disable the
	"wave=speaker.drv" line in the System.ini file. To disable this line, place a
	semicolon (;) at the beginning of the line. After you make this change, restart
	your computer.
	
	Internet Explorer 4.01 with Windows Update
	------------------------------------------
	
	If you are having shutdown problems on a computer with Microsoft Internet
	Explorer 4.01 with the Windows Desktop Update component installed, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q178941 Computer Hangs on Shutdown with Windows Desktop Update Component
	
	
	Clean Boot Your Computer
	------------------------
	
	Clean-boot troubleshooting refers to methods of reducing problems that may occur
	because of your computer's environment. Many problems occur because of
	conflicting drivers, terminate-and-stay-resident programs (TSRs), and other
	settings that are loaded when your computer starts. For additional information
	about how to clean-boot your computer, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q243039 How to Perform a Clean Boot in Windows 95
	
	Additional query words: corrupt w95susdfaq restart
	
	======================================================================
	Keywords          : kbenv kbtshoot win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	
	=============================================================================
	

{% endraw %}
