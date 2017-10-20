---
layout: page
title: "Q128400: Windows 95 Setup Switches"
permalink: /kb/128/Q128400/
---

## Q128400: Windows 95 Setup Switches

{% raw %}

	Article: Q128400
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbsetup win95kbfaq
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes the switches you can use with the Windows 95 Setup
	program.
	
	MORE INFORMATION
	================
	
	The following switches can be added to the Setup command. For example,
	
	  setup /?
	
	/? - This switch provides a brief summary of the available Setup switches
	
	  and the correct command line syntax.
	
	/c - This switch causes Setup to not run SMARTDrive.
	
	/d - If you do not want Setup to use your existing Windows configuration
	
	  (such as your current Win.ini and System.ini files), use this switch.
	
	/id - If you do not want Setup to check for the minimum disk space
	
	  required to install Windows 95, use this switch.
	
	/it - If you do not want Setup to check for the presence of "dirty" or
	
	  "deadly" terminate-and-stay-resident programs (TSRs) that are known to cause
	  problems with Windows 95 Setup, use this switch.
	
	
	/ih - This switch causes Setup to run ScanDisk in the foreground.
	
	/iq - If you use the /is switch to bypass ScanDisk or ScanDisk fails,
	
	  Setup checks your drive for cross-linked files. Use the /iq switch to prevent
	  Setup from doing this.
	
	
	/is - This switch causes Setup to not run ScanDisk.
	
	
	/l - Use this switch if you have a Logitech mouse and want it enabled
	
	  during Setup.
	
	You must run Setup from your previous version of MS-DOS or start Windows 95 in
	MS-DOS mode for these switches to function.
	
	/n - This switch causes Setup to run without a mouse.
	
	/p - The /p switch causes Setup to pass string(s) directly to Detection
	
	  Manager (or Sysdetmg.dll). Setup does not interpret the content of the
	  string. The string can contain one or more detection options.
	
	  The /p switch is not to be used by itself. For more information on the /p
	  switch, please see the "/p Detection Switch Option String Defined" section
	  below.
	
	-s - Use this switch to use an alternate Setup.inf file.
	
	/t:<dir> - This switch lets you to specify where Setup will copy its
	
	  temporary files. WARNING: Any existing files in this directory will be
	  deleted.
	
	
	/p Detection Switch Option String Defined
	-----------------------------------------
	
	- The string can contain one or more detection switches separated by a
	  semicolon (;). For example, if you want to use "/p f" and "/p i" you type
	  "setup /p f;i".
	
	- Some switches are simply On/Off switches. The absence of the switch implies
	  Off; the presence of the switch turns it On. A minus sign (-) appended
	  immediately after a switch turns it Off.
	
	- Some switches take parameters in the form of <c>=<params>. If
	  there is more than one parameter to a switch, the parameters are separated by
	  a comma (,).
	
	- There must not be any spaces in the detection option string.
	
	Valid Detection Switches:
	
	a - This switch enables safe detection. It tells each detection module
	
	  to try safer detection methods. Safer detection methods may not detect
	  devices correctly.
	
	  The default during Setup is enabled. The default in other cases is disabled.
	
	  Example: setup /p a
	
	b - This switch enables Prompt Before mode. It prompts you before a
	
	  detection module is called so that you can step through each detection module
	  manually and decide if you want to skip it.
	
	  The default is disabled.
	
	  Example: setup /p b
	
	c - This switch enables class detection. Class detection is a mechanism
	
	  for finding hints for a certain class of devices. For example, adapter class
	  detection looks for hints in the Config.sys and System.ini files for CD-ROM
	  drivers. If it does not find any, Setup displays a CD-ROM check box asking if
	  you have a CD-ROM drive.
	
	  The default during Setup is enabled. The default when you use the Add New
	  Hardware tool and docking/undocking detection is disabled.
	
	  Example: setup /p c
	
	c- - Setup /p c- disables safe class detection. For example, this switch
	
	  tells Setup to always search on all network adapter cards, sound cards, and
	  CD-ROM drives.
	
	  Example: setup /p c-
	
	d=<name> - This switch detects the listed detection modules only, where
	
	  <name> is a detection module name or a device class name.
	
	  Detection module names (such as DetectPIC and DetectAHA154x) are found in the
	  Msdet.inf file. Device class names can be SCSIAdapter, net, and so on.
	
	  Example: setup /p d=detectpic
	
	e - This switch enables Setup mode detection.
	
	  The default during Setup is enabled. The default in other cases is disabled.
	
	  Example: setup /p e
	
	f - This switch enables Clean Registry mode.
	
	  It forces Detection to delete the HKEY_LOCAL_MACHINE\Enum\Root registry key
	  before starting. This switch is ignored when Setup is run in the Windows 95
	  graphical user interface (GUI).
	
	
	  The default is disabled.
	
	  Example: setup /p f
	
	g=<n> - This switch specifies the verbose level, where <n> is 0 to
	3.
	
	  This switch controls how verbose the built-in progress bar is. At maximum
	  level (3), it shows all the resources of the detected devices along with the
	  progress bar. This switch can help to identify which detection module causes
	  a certain problem. For example, if your mouse stops responding (hangs) during
	  detection but the system continues, there is no way to determine from the log
	  files which module hung the mouse. By turning this option on and constantly
	  moving the mouse during Setup, you can determine which module is running when
	  the mouse hangs.
	
	  The default is disabled (0).
	
	  Example: setup /p g=3
	
	i - This switch tells Setup not to report the existence of a Plug and
	
	  Play BIOS. It is useful on systems that have a Plug and Play BIOS that is not
	  reported in Machine.inf.
	
	
	  Example: setup /p i
	
	j - This switch tells Setup to undo the results of the "Setup /p i"
	
	  switch. This switch should only be used after a machine that required "Setup
	  /p i" has updated their Plug and Play BIOS.
	
	  Example: setup /p j
	
	l=<n> - This switch specifies the logging level for Detlog.txt, where
	
	  <n> is 0 to 3.
	
	  The default is maximum logging (3).
	
	  Example: setup /p l=0
	
	m - This switch enables Mini-windows mode.
	
	  This is enabled only when Setup is run under MS-DOS.
	
	  Example: setup /p m
	
	n - This switch enables No Recovery mode. This option can be used to
	
	  turn off the Windows 95 Setup recovery mechanism (for example, this switch
	  prevents the creation of the Detcrash.log file).
	
	  The default is disabled.
	
	  Example: setup /p n
	
	o=<traceoutput> - This switch specifies the trace output. The information
	
	  is written to the Tracelog.txt file in the current directory.
	
	  This option is available only in the Debug version of Sysdetmg.dll.
	
	  Example: setup /p o
	
	p - This switch enables performance logging. It writes performance
	
	  timing information to the DETLOG.TXT file.
	
	  The default is disabled.
	
	  Example: setup /p p
	
	r - This switch enables Recovery mode. It causes Detection to use the
	
	  Detcrash.log file, if found, for recovery. If this switch is not enabled,
	  Detection ignores and deletes Detcrash.log even if it is found.
	
	  This switch is used if Safe Recovery is selected during Setup, otherwise it is
	  not used.
	
	  Example: setup /p r
	
	s=<name> - This switch skips the listed detection modules or classes of
	
	  detection modules, where <name> is a detection module name or a device
	  class name.
	
	  Detection module names (such as DetectPIC and DetectAHA154x) are in the
	  Msdet.inf file. Device class names are SCSIAdapter, net, and so on.
	
	  Example: setup /p s=detectpic
	
	t=<n> - This switch specifies the trace level, where <n> is 0 to 9.
	
	  The default is disabled (0).
	
	  This option is available only in the Debug version of Sysdetmg.dll.
	
	  Example: setup /p t=9
	
	v - This switch enables Verify Only mode. Detection has two stages:
	
	1. Verify existing devices in the registry.
	
	2. Detect new devices.
	
	  This switch tells Detection to perform only stage 1. This switch is used by
	  the PCMCIA Wizard to verify legacy devices in the registry.
	
	  The default is disabled.
	
	  Example: setup /p v
	
	x=<res list> - This switch excludes the listed resources from detection,
	
	  where <res list> is one of four possibilities:
	
	  - io(xxx-yyy,xxx-yyy,...)
	
	  - mem(xxxxx-yyyyy,xxxxx-yyyyy,...)
	
	  - irq(x,y,z,...)
	
	  - dma(x,y,z,...)
	
	  This switch protects resources so that no detection modules can access them.
	
	  Example: setup /p x=io(300-30f,240-24f)
	
	Additional query words: eula w95setfaq
	
	======================================================================
	Keywords          : kbsetup win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	

{% endraw %}
