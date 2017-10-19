---
layout: page
title: "Q152064: How to Install an Internal Modem in Windows 95"
permalink: /kb/152/Q152064/
---

## Q152064: How to Install an Internal Modem in Windows 95

	Article: Q152064
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): win95kbfaq
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article describes how to install an internal modem in a computer running
	Windows 95.
	
	MORE INFORMATION
	================
	
	To install an internal modem in a computer running Windows 95, follow these
	steps:
	
	1. Physically configure the modem to use the appropriate serial port, I/O
	  address range, and interrupt request (IRQ) line. Be sure to choose a serial
	  port, an I/O address range, and an IRQ line that is not already in use by
	  another device. For information about how to configure the modem, consult the
	  documentation included with the modem, or contact the modem's manufacturer.
	
	  NOTE: If the modem is a Plug and Play modem, you do not need to physically
	  configure the modem to use a specific serial port, I/O address range, or
	  interrupt request (IRQ) line. However, depending on the configuration of the
	  existing legacy (non-Plug and Play) devices in your computer, installing the
	  Plug and Play modem may create a resource conflict that prevents the modem
	  from functioning properly. To work around this behavior, configure the legacy
	  devices to use a different I/O address range or IRQ line, or configure the
	  computer so that the appropriate I/O address range or IRQ line is reserved
	  for the legacy device.
	
	2. If the modem is configured to use a serial port that physically exists in
	  your computer, disable the serial port in your computer's CMOS settings. For
	  example, if the modem is configured to use the COM2 port and your computer
	  contains two physical serial ports, COM2 must be disabled in your computer's
	  CMOS settings. For information on how to disable the serial port, consult the
	  documentation included with your computer, or contact the computer's
	  manufacturer.
	
	  NOTE: If your computer contains a Plug and Play BIOS, disabling a serial port
	  in the computer's CMOS settings may not free the resources that the serial
	  port is configured to use. This may create a resource conflict between the
	  serial port and the modem and may prevent the modem from functioning
	  properly. To work around this behavior, use either of the following methods:
	
	   - Physically configure the modem to use a serial port that does not exist in
	     the computer. For example, if your computer contains two physical serial
	     ports, configure the modem to use the COM3 port.
	
	     NOTE: In addition to configuring the modem to use a different serial port,
	     you may need to physically configure the modem to use a different IRQ. The
	     COM1 and COM3 ports and the COM2 and COM4 ports are configured to use the
	     same IRQ line by default. If a modem is configured to use COM1 or COM2 and
	     is conflicting with the serial port that it is configured to use,
	     configuring the modem to use COM3 or COM4 may not eliminate the conflict.
	
	   - Reinstall Windows 95 using the following command:
	
	  setup /p i
	
	     The "/p i" switch causes Setup not to report the existence of a Plug and
	     Play BIOS. When you disable the serial port in your computer's CMOS
	     settings after using this command to reinstall Windows 95, the resources
	     that the serial port is configured to use are freed. For more information,
	     please see the following article in the Microsoft Knowledge Base:
	
	  Q128400 Windows 95 Setup Switches
	
	3. Turn off your computer, insert the modem in an open slot, and then turn the
	  computer back on.
	
	4. If the modem is not detected automatically when Windows 95 starts, run the
	  Install New Modem Wizard. To do so, use the following steps.
	
	  NOTE: Follow these steps only if the modem is not detected automatically. If
	  the modem is detected as a standard modem type or is detected incorrectly,
	  skip to step 5. If the modem is detected, but you are prompted to select
	  which driver you want to install, skip to step 6.
	
	  a. In Control Panel, double-click Modems.
	
	  b. If you do not already have a modem installed in your computer, the Install
	     New Modem Wizard starts automatically. If you already have a modem
	     installed in your computer, click Add to start the Install New Modem
	     Wizard.
	
	     To install the modem after the Install New Modem Wizard starts, click the
	     "Don't detect my modem..." check box to clear it, and then click Next.
	
	  If the modem is still not detected, the resources that the modem is configured
	  to use may conflict with the resources being used by another device. To work
	  around this behavior, eliminate the resource conflict by configuring one of
	  the devices to use different resources.
	
	5. If the modem is detected, but Windows 95 is unable to accurately identify the
	  modem, a standard modem driver or other incorrect modem driver may be
	  installed. If this occurs, follow these steps:
	
	  a. In Control Panel, double-click Modems.
	
	  b. If you do not already have a modem installed in your computer, the Install
	     New Modem Wizard starts automatically. If you already have a modem
	     installed on your computer, click the Add button to start the Install New
	     Modem Wizard.
	
	     After the Install New Modem Wizard starts, click the "Don't detect my
	     modem..." check box to select it, and then click Next.
	
	  c. In the Manufacturers box, click the manufacturer of the modem. If the
	     specific modem you are installing appears in the Models box, click the
	     modem and then follow the instructions on the screen.
	
	     If the manufacturer of the modem does not appear in the Manufacturers box
	     or the specific modem does not appear in the Models box, Windows 95 does
	     not include a driver for your modem. To use the modem in Windows 95, use
	     the standard modem driver or contact the manufacturer of the modem to
	     inquire whether a protected-mode driver that is compatible with Windows 95
	     is available.
	
	6. If Windows 95 is able to accurately identify the modem but determines that
	  the modem is not supported by the drivers included with Windows 95, you are
	  prompted to select which driver you want to install for the modem. The
	  following options are available:
	
	   - Driver from disk provided by hardware manufacturer
	
	   - Do not install a driver (Windows will not prompt you again)
	
	   - Select from a list of alternate drivers
	
	  If you have a disk from the modem's manufacturer that contains Windows 95
	  drivers, click the "Driver from disk provided by hardware manufacturer"
	  option. If you have information from the manufacturer that this modem
	  emulates another modem Windows 95 supports, click the "Select from a list of
	  alternate drivers" option and select the appropriate modem from the list.
	
	  NOTE: The prompt described above is typically displayed when an unsupported
	  Plug and Play modem is installed in the computer. If you installed an
	  unsupported Plug and Play modem and configured Windows 95 to use a driver
	  included with Windows 95, you can configure Windows 95 to use a driver
	  provided by the hardware manufacturer instead. To do so, follow these steps:
	
	  a. In Control Panel, double-click System.
	
	  b. Click the Device Manager tab, click the modem, and then click Remove. Note
	     that some Plug and Play modems may appear on the Other Devices branch in
	     Device Manager instead of the Modem branch.
	
	  c. Turn the computer off, wait a few seconds, and then turn it back on.
	
	  d. When you are prompted to select which driver you want to install for the
	     modem, click the "Driver from disk provided by hardware manufacturer"
	     option.
	
	Additional query words: w95hwfaq
	
	======================================================================
	Keywords          : win95 kbfaq
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
