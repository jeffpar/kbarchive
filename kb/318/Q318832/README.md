---
layout: page
title: "Q318832: PRB: Run-Time Error 8015 If You Try to Open the Serial Port"
permalink: /kb/318/Q318832/
---

## Q318832: PRB: Run-Time Error 8015 If You Try to Open the Serial Port

{% raw %}

	Article: Q318832
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbSerial kbModem
	Last Modified: 24-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to open the serial port with Microsoft Comm Control, you may receive
	the following error message:
	
	  Run-time error '8015': Could not set comm state, there may be one or more
	  invalid communications parameters.
	
	CAUSE
	=====
	
	This behavior can occur if a serial printer driver is using the serial port that
	you are trying to open.
	
	RESOLUTION
	==========
	
	To resolve this behavior, disable the serial printer or attach it to another
	port. If you are using Microsoft Windows 2000 or Microsoft Windows XP, create a
	virtual COM port.
	
	STATUS
	======
	
	This behavior can occur if the serial printer driver is not working correctly,
	and is not a problem with the MSComm32 Control.
	
	MORE INFORMATION
	================
	
	To work around this behavior, create a new virtual COM port and use it instead
	of COM1.
	
	WARNING: If anything else prints on the printer attached to COM1, your program
	may not work as expected.
	
	1. Add the following code to the General Declarations section of Form1:
	
	  Private Declare Function DefineDosDevice Lib "kernel32" Alias _</BR>
	  "DefineDosDeviceA" (ByVal dwFlags As Long, ByVal lpDeviceName _</BR>
	  As String, ByVal lpTargetPath As String) As Long<BR/>
	  Const DDD_RAW_TARGET_PATH = &H1
	
	2. Add another Command button to Form1.
	
	3. Add the following code in the Click event of Command2:
	
	  DefineDosDevice DDD_RAW_TARGET_PATH, "COM5", "\Device\Serial0"
	
	4. Change the code on Command1 to open COM5:
	
	  MSComm1.CommPort = 5
	
	5. Run the program, click Command2, and then click Command1.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Install a Generic Text printer, and then connect it to COM1 instead of LPT1.
	
	2. Start a new Standard EXE project in Microsoft Visual Basic. By Default, Form1
	  is created.
	
	3. Add the Microsoft Comm Control to the project.
	
	4. Add a new MSComm1 control on Form1.
	
	5. Add a new Command button on Form1, and then insert the following code in the
	  Click event:
	
	        MSComm1.CommPort = 1<BR/>
	        MSComm1.Settings = "9600,N,8,1"<BR/>
	        MSComm1.Handshaking = comNone<BR/>
	        MSComm1.InBufferSize = 1024<BR/>
	        MSComm1.OutBufferSize = 512<BR/>
	        MSComm1.RThreshold = 0<BR/>
	        MSComm1.SThreshold = 0<BR/>
	        MSComm1.InputLen = 0<BR/>
	        MSComm1.PortOpen = True<BR/>
	
	6. Run the program, and then click Command1.
	
	REFERENCES
	==========
	
	For more information, see the DefineDosDevice function documentation in the
	Microsoft Developer Network (MSDN) under Platform SDK.
	
	Additional query words: Serial Port Unspecified Error
	
	======================================================================
	Keywords          : kberrmsg kbSerial kbModem 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
