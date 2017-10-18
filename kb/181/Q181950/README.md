---
layout: page
title: "Q181950: XFOR: How to Use the Internet Mail Connector in Console Mode"
permalink: kb/181/Q181950/
---

## Q181950: XFOR: How to Use the Internet Mail Connector in Console Mode

	Article: Q181950
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.50
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.50 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	The Internet Mail Service (Internet Mail Connector in version 4.0) has a command
	line option that allows the service to run in a console window. This can be
	useful when you are troubleshooting the Internet Mail Service because the option
	provides statistics and message processing sequence, logged directly to the
	console window.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	WARNING: Running the IMC in console mode is for testing purposes only not for
	productive environments. There is a potential problem running the IMC when the
	registry key DisplayErrsOnConsole has been added, specifically, the IMC stops
	silently. If all three of the following conditions are met the IMC can silently
	stop:
	
	- The registry key DisplayErrsOnConsole exists.
	
	- An outbound message contains "%Z" (without the quotation marks) in the
	  subject.
	
	- If the message is submitted from a non-MAPI client the registry key
	  RerouteViaStore is set to 1.
	
	To resolve this behavior, remove the registry key DisplayErrsOnConsole.
	
	To run the Internet Mail Service in a console window, do the following:
	
	1. Run the Registry Editor (Regedt32.exe).
	
	2. Go to the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters
	
	3. From the Edit menu, select "Add Value".
	
	4. In the AddValue dialog box, type the following key name:
	
	  DisplayErrsOnConsole
	
	5. From the "Data Type" box, click REG_DWORD.
	
	6. In the "DWORD Editor DATA" field, type "100" (without the quotation marks)
	  (or any value over 10), and then in "Data Type", click Hex.
	
	7. In Control Panel, double-click Services and confirm that the Internet Mail
	  Service is stopped.
	
	8. Open a command window, and change directories to the <Exchange Install
	  Directory> (usually exchsrvr)\Connect\MSExcImc\Bin.
	
	9. Start the Internet Mail Service with the following command and switch:
	
	  "MSEXCIMC -console" (without the quotation marks)
	
	You can also increase the frequency of the statistical updates to the console by
	decreasing the value for this key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIMC\Parameters\ConsoleStatFrequency
	
	It is set to 14 by default; lower this to a rate that suits you.
	
	Additional query words: IMC IMS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.50
	Issue type        : kbhowto
	
	=============================================================================
	
