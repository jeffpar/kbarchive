---
layout: page
title: "Q152988: Works: Troubleshooting Communications Problems in Windows 95"
permalink: /kb/152/Q152988/
---

## Q152988: Works: Troubleshooting Communications Problems in Windows 95

{% raw %}

	Article: Q152988
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2.0,2.0a,3.0,3.0a,3.0b,4.0,4.0a,4.5,4.5a
	Operating System(s): 
	Keyword(s): kbenv kbtshoot
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Works, versions 2.0, 2.0a, 3.0, 3.0a, 3.0b, 4.5, 4.5a 
	- Microsoft Works for Windows 95, version 4.0, versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to communicate with an internal modem using the same COM port
	as an existing on-board COM port, multi-I/O board or other device (such as a
	mouse or scanner), you may experience various problems, depending on the
	hardware and BIOS used. These problems may occur even if nothing is connected to
	the physical COM port.
	
	Symptoms may include the following:
	
	- The system stops responding (hangs) when you create a communications
	  document, try to connect, or use Dial This Number.
	
	- The system reboots when attempting to dial or connect.
	
	- The modem dials and rings but does not connect.
	
	- The modem dials but the message, NO CARRIER, is displayed.
	
	- You receive an error stating that the Modem is Busy or Not Responding.
	
	- The mouse cursor disappears.
	
	RESOLUTION
	==========
	
	If your modem is not configured correctly, Work's Communications module may not
	function properly. The following procedures list steps to verify the correct
	operation of your modem and communications in Windows 95.
	
	After finishing each section, try to use the modem. If you still experience any
	of the symptoms listed above, proceed to the next section.
	
	Check Modem Settings and That Windows 95 Can Communicate With the Modem
	-----------------------------------------------------------------------
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click Modems.
	
	3. Verify that your modem manufacturer and model is listed correctly. If it is
	  not listed, click Add to run the Install New Modem Wizard which will detect
	  the modem and confirm it with the current Registry configuration.
	
	  NOTE: If the manufacturer and model are not correct or not available in the
	  list, choose one of the Standard types of modems with a baud rate that
	  matches your modem.
	
	4. On the General tab of the Modem Properties dialog box, select your modem and
	  click Properties.
	
	5. Verify that the port is set to the port your modem is on. If not, select the
	  correct port and then click OK.
	
	6. On the Diagnostics tab of the Modem Properties dialog box, select your modem
	  and click More Info.
	
	Windows will attempt to communicate with the modem. If this is unsuccessful, or
	you receive an error message, Windows is having difficulty communicating with
	the modem.
	
	Check for Device Conflicts
	--------------------------
	
	Determine if the communications port I/O addresses and IRQ settings are properly
	defined and there are no conflicting devices.
	
	1. In the Control Panel, double-click System.
	
	2. On the Device Manager tab, click the plus sign (+) next to Ports.
	
	3. Choose a port and click Properties.
	
	4. On the General tab, verify that Device Status lists the device as working
	  properly.
	
	5. Click the Resources tab to display the current resource settings for the
	  port. Consult your modem manual or contact the modem manufacturer to
	  establish the correct settings.
	
	6. Verify the Conflicting Device list shows NO conflicts. If the modem is in
	  conflict with another device, do the following:
	
	  a. Clear the check from the Use Automatic Settings box.
	
	  b. Click the menu in Setting Based On and choose a configuration that does
	     not have resource conflicts.
	
	  c. Click Change.
	
	  NOTE: Do not use a modem on COM3 if you have a serial mouse or other device on
	  COM1. Usually COM1 and COM3 use the same interrupt request line (IRQ) and
	  cannot be used simultaneously; COM2 and COM4 also typically use the same IRQ.
	  If possible, change the COM3 and COM4 port to an IRQ setting that is not in
	  conflict.
	
	  Some display adapters have an address conflict with the COM4 port. To work
	  around this conflict, use another COM port or replace your graphics adapter.
	
	
	7. Make sure you check all the devices listed under Ports, repeating steps 4-7
	  above.
	
	Verify the Port Settings and the Modem Is Enabled
	-------------------------------------------------
	
	1. In Device Manager, click the plus sign (+) next to Modem.
	
	2. Select your modem, and then click Properties.
	
	3. On the General tab, verify the following:
	
	  The Device Status lists the device as working properly.
	
	4. On the Modem tab, verify the following:
	
	  The baud rate is set to the speed of your modem.
	
	5. Click the Connection tab and verify the following:
	
	  The data, parity, and stop bits, are correct for the connection you are
	  trying to establish.
	
	  The Wait For Dial Tone Before Dialing box is checked.
	
	6. Click Port Settings and verify the UART type.
	
	Data transmission problems may occur when a baud rate greater than 9600 is
	selected on a slower computer not equipped with a 16550 UART, or when performing
	other tasks during a download. If problems or errors occur during transmission,
	try lowering the baud rate. Attempting to use baud rates greater than 9600 on
	computers equipped with 8250 or 16450 UARTs will result in dropped characters.
	
	Reduce the Baud Rate
	--------------------
	
	1. Follow steps 1-2 in the "Verify the Port Settings" and the "Modem Is Enabled"
	  section above.
	
	2. On the Modem tab, reduce the baud rate and check the Only Connect At This
	  Speed box if it not already selected.
	
	NOTE: Lowering the baud rate is recommended when using an older computer. If the
	system you are calling cannot communicate at the initial baud rate, it may be
	able to communicate at a slower baud rate.
	
	Check Communication Files
	-------------------------
	
	Some communication programs designed for Windows 3.1x install incompatible driver
	files which may cause COM ports and modems to stop working. Verify the required
	communication files are present and they are the correct sizes and dates for
	Windows 95.
	
	To Verify the required communication files do the following
	
	1. Click Start, point to Programs, and then click Windows Explorer.
	
	2. Click the plus sign (+) to the left of the Windows folder.
	
	3. Click the System folder.
	
	4. In the right pane, verify the following information for these files:
	
	     Comm.drv            5,856 bytes          7/11/95
	     Serial.vxd         18,572 bytes          7/11/95
	
	5. If these files are not found or are not the correct size or date, expand new
	  copies of them from the Windows 95 CD-ROM or floppy disks. For information on
	  how to do this, see your Windows documentation or on-line help.
	
	Verify Settings in the System.ini
	---------------------------------
	
	1. Click Start, and then click Run.
	
	2. Type "System.ini" (without the quotation marks), and then click OK.
	
	3. Verify the following lines:
	
	    [boot]
	    comm.drv=comm.drv
	
	    [386enh]
	    device=*vcd
	
	Check for Incorrect Jumper Settings or Faulty Hardware
	------------------------------------------------------
	
	If none of the steps above resolve the conflict, you may have a hardware problem,
	such as jumpers on your motherboard or modem may be set incorrectly. Consult
	your modem manual or contact the manufacturer of your modem for additional
	hardware diagnostic tests.
	
	MORE INFORMATION
	================
	
	Many PC motherboards ship with two built-in COM ports. Even though there may not
	be an external connector for the second COM port, the COM port circuitry is on
	the motherboard and must be disabled to reliably use an internal modem on COM2.
	Reconfiguring the COM ports usually involves changing a DIP switch or moving a
	jumper. Consult your hardware documentation for more information about
	configuring the COM ports.
	
	Additional query words: 2.00 2.00a 3.00 3.00a 3.00b 4.00 4.00a 4.50 4.50a w_works hang t-shoot tshoot com1 com2 com3 com4 switch switches win_95 hyperterminal wcm again i/o locks up freezes freeze crash
	
	======================================================================
	Keywords          : kbenv kbtshoot 
	Technology        : kbHomeProdSearch kbWin95search kbWorksSearch kbZNotKeyword3 kbWorks300 kbWorks300a kbWorks300b kbWorks400 kbWorks450 kbWorks200 kbWorks200a kbWorks400a kbWorks450a
	Version           : :2.0,2.0a,3.0,3.0a,3.0b,4.0,4.0a,4.5,4.5a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
