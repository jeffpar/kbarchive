---
layout: page
title: "Q131513: PC Gen: Basic Asynchronous Troubleshooting Procedures"
permalink: /kb/131/Q131513/
---

## Q131513: PC Gen: Basic Asynchronous Troubleshooting Procedures

{% raw %}

	Article: Q131513
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Asynchronous problems with Microsoft Mail for PC Networks can be caused by
	either hardware or software. The following basic troubleshooting procedures can
	be used to determine if the hardware is at fault.
	
	MORE INFORMATION
	================
	
	Procedure A: Using the MS-DOS ECHO Command to Check the Modem and Port
	----------------------------------------------------------------------
	
	1. Make sure that the modem is connected to a live phone line.
	
	  NOTE: If an external modem is used, it is important to make sure that the
	  cable is a standard straight-through RS-232 serial modem cable with no
	  gender-changers on either end. A null-modem cable will not work for standard
	  modems connecting via a phone line, nor will a serial printer cable work for
	  this purpose. The length of this cable cannot exceed 25 feet.
	
	2. From a MS-DOS command prompt, using the MS-DOS ECHO command, type the
	  following command:
	
	  "ECHO ATDT > COMn" (without the quotation marks)
	
	  where "n" is the COM port the modem is connected to.
	
	  Notes:
	
	   - The command above is prompting the hardware on the defined port for a
	     dialtone (ATDT=ATtention Dial Tone), the dial tone will continue for 30
	     seconds.
	
	   - To stop prompting the port for a dialtone, again using the MS-DOS "ECHO"
	     command, type the following:
	
	  "ECHO ATH > COMn" (without the quotation marks)
	
	3. If a dial tone was heard, go to Procedure C. If not, a "Write Fault Error"
	  will appear. Go to the next procedure.
	
	Procedure B: Using Microsoft System Diagnostics to Check for IRQ Conflicts
	--------------------------------------------------------------------------
	
	1. From MS-DOS, run Microsoft System Diagnostics (MSD.EXE) by typing MSD at a
	  command prompt.
	
	  NOTE: For accurate readings, make sure that you are not running MSD from a
	  MS-DOS box in Windows or a Virtual MS-DOS Machine (VDM) in Windows NT.
	
	2. Once in MSD, press the C key to check the COM Ports. The following are the
	  default COM port settings (port address and IRQ address).
	
	                     COM1      COM2        COM3      COM4
	  -----------------------------------------------------------------------
	  Port address (hex)   03F8H      02F8H      03E8H      02E8H
	  IRQ address            4          3          4          3
	
	  NOTE: COM1 and COM3 share the same IRQ (IRQ 4), as do COM2 and COM4 (IRQ3), so
	  a mouse on COM1 cannot coexist with a modem on COM3.
	
	3. When you check the COM port settings in MSD, if the modem is on COM1, make
	  sure that COM3 is not displayed. If it is, changes need to be made with the
	  system in either the system BIOS or a jumper setting on the motherboard,
	  depending on the system configuration, or the conflicting piece of hardware's
	  settings (for example, network adapters, sound cards, mouse, etc.) need to be
	  changed.
	
	4. If no conflicts are shown, press the ESC key to exit Comm Ports.
	
	5. Press the Q key to check the IRQ Status.
	
	6. Using the table above, check the IRQ address for the COM port the modem is
	  on. If there is a device other than default handlers detected for the port,
	  changes may need to be made to hardware or software causing the conflict (for
	  example, network adapters, sound cards, mouse, etc.). Keep in mind that the
	  External program (EXTERNAL.EXE) and Microsoft Mail Remote for Windows use the
	  default IRQs. Changes can be made for the External program to the
	  EXTERNAL.INI file or command line settings with the entries:
	
	  AsyncCommPort=<port>, AsyncPort=<address>,
	  AsyncInt=<interrupt>.
	
	  The default IRQs must be used or Microsoft Mail Remote for Windows will not
	  recognize the COM port. The changes must be made to the other device.
	
	7. Press the ESC key to exit IRQ Status, and press the F3 key to exit MSD. If no
	  conflicts were found, or if conflicts that existed in previous steps are
	  resolved, go to the next procedure.
	
	Procedure C: Checking the Quality of the Modem & Cable on MTA w/ Terminal
	-------------------------------------------------------------------------
	
	1. From Control Panel, double-click the Ports icon.
	
	2. From the Ports dialog box, select the COM port connected to the modem, select
	  the Settings button.
	
	3. Change the flow control for the port to Hardware by selecting the down arrow
	  button in the Flow Control field. Click OK. Click the Close button, and exit
	  Control Panel.
	
	4. From the Settings menu in Terminal, choose Communications.
	
	5. Select the COM port the modem is connected to in the Connector field.
	
	6. Select Hardware in the Flow Control field, and click OK.
	
	7. From the Settings menu, choose Phone Number.
	
	8. Enter the phone number of the External MTA in the Dial field.
	
	9. Change the Time-out If Not Connected In [nn] Seconds option to 60 seconds.
	  Click OK.
	
	10. Make sure that the modem is connected to a live phone line.
	
	11. From the Phone menu, choose Dial.
	
	12. Once connected, the External program will prompt for logon. "Logon:"
	  preceded and followed by control blocks being displayed.
	
	  If the Logon prompt is displayed, the quality of the modem, and modem cable
	  are satisfactory.
	
	  If the Logon prompt is NOT displayed, test the following:
	
	   - Try to swap modem cables.
	
	   - Try a different modem.
	
	   - Try swapping phone (RJ-11) cables.
	
	   - Try a different phone line.
	
	   - Try running EXTERNAL.EXE or Mail Remote from another workstation.
	
	   - Make sure that the External Mail program files (EXTERNAL.* and *.OVL from
	     the \MAILEXE directory) are in a directory on the local hard disk that is
	     in the PATH= statement in the AUTOEXEC.BAT file. Make sure that the files'
	     paths are changed in the batch file from which EXTERNAL.EXE is executed.
	     Run through the steps in Procedure C again after you make the necessary
	     changes. Repeat as often as necessary.
	
	NOTE: The Terminal settings above only work with Windows 3.x, Windows NT 3.1,
	3.5, and 3.51. Windows 95 does NOT use TERMINAL.EXE, but instead uses
	HyperTerminal.
	
	To create a HyperTerminal connection to the External MTA for testing, use the
	following procedure:
	
	1. Click on the Start button. Select Programs, Accessories, and HyperTerminal.
	
	  NOTE: The icon for HyperTerminal is a folder.
	
	2. Double-click the Hypertrm icon to create a New Connection.
	
	3. In the Name field, type Test Logon to MTA. Click OK.
	
	4. Type the number to the MTA in the Phone Number field, and select the
	  appropriate modem in the Connect Using field. Click OK.
	
	  NOTE: The modem must be installed using the Windows 95 Modem Wizard before it
	  can be selected.
	
	5. Click Dial to connect to the MTA.
	
	Once you are connected, the External program will prompt you to log on. The
	Logon: is preceded and followed by control blocks being displayed.
	
	If the Logon prompt is displayed, the quality of the modem and modem cable are
	satisfactory.
	
	For more information on the above EXTERNAL.INI settings, refer to the Microsoft
	Mail for PC Networks "Administrator's Guide," pages 256-257 for version 3.2 and
	3.2a.
	
	Below are some basic troubleshooting steps to determine if the problem is due to
	the software driver or with the compatibility between the modem and the script
	used.
	
	NOTE: The most common incompatibility between the modem and script is while you
	are receiving messages. Sending messages usually works fine.
	
	A slightly corrupt \MAILDATA\GLB\MODEM.GLB file can cause intermittent connection
	problems on the External MTA. To resolve this:
	
	1. Rename the \MAILDATA\GLB\MODEM.GLB file to MODEM.OLD using the MS-DOS RENAME
	  command.
	
	2. Run the Mail Administration utility (ADMIN.EXE), and reset the serial
	  information using the Config, Serial options.
	
	In addition, you can try to shut down and restart the External MTA. It has been
	known to resolve some Remote user connectivity issues as well.
	
	The External program and the Remote clients use a proprietary script language for
	postoffice security reasons. This is designed to prevent unauthorized users with
	a modem from hacking into the postoffice and reading mail.
	
	The following scripts work well with a variety of modems:
	
	  DEFAULT.SCR
	  HAYES24.SCR
	  HAYES96.SCR
	  USGNERIC.SCR
	  VSERIES.SCR
	  USVSER96.SCR (included with Mail Remote for Windows version 3.2)
	
	It may be necessary to modify an existing script file. MDM or MoDeM files are
	included with the program for this purpose. Refer to the modem manual for the
	S-Registers for the modem.
	
	If this modem is not in the list of available modems, contact the modem
	manufacturer for a script, for assistance in creating a script, or for help with
	modifying an existing one.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q99946 PC WRmt: Available Modem Scripts
	
	Additional query words: 3.00 3.20 Async
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	

{% endraw %}
