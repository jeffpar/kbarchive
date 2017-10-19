---
layout: page
title: "Q99595: HOWTO: Use @ ... SAY Commands &amp; Control Codes to Print in FP/W"
permalink: /kb/099/Q99595/
---

## Q99595: HOWTO: Use @ ... SAY Commands &amp; Control Codes to Print in FP/W

	Article: Q99595
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5x,2.6x,3.0,5.0
	Operating System(s): 
	Keyword(s): kbprint kbPrinting kbvfp300 kbvfp500
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following procedures show how to bypass the Windows printer drivers and send
	control codes directly to the printer for use in combination with @ ... SAY
	commands.
	
	MORE INFORMATION
	================
	
	FoxPro for Windows cannot send control codes directly to a printer using a
	Windows printer driver. There are two techniques to work around this:
	
	- Open the printer in "raw mode," bypassing the Windows printer driver and
	  communicating directly with the printer.
	
	  -or-
	
	- Write all output to a text file, then copy the text file to a printer port.
	
	Writing FoxPro for Windows programs that send control codes directly to a printer
	is not normally recommended. Only use these techniques when adapting existing
	FoxPro for MS-DOS code that sends control codes to the printer.
	
	The following examples send control codes to switch an Epson FX-80 dot- matrix
	printer's compressed mode on and off.
	
	NOTE: When using these techniques, do not use any of the ? or ?? commands for
	output. Only use @ ... SAY commands.
	
	Technique 1: Open the Printer in Raw Mode
	-----------------------------------------
	
	There are two ways to open the printer in raw mode:
	
	- Use the ??? " " command.
	
	  -or-
	
	- Use the SET PDSETUP TO <driver name> command.
	
	  NOTE: This method will not work under Visual FoxPro unless the FoxPro 2.x
	  file, GENPD.APP, exists. Visual FoxPro does not ship with GENPD.APP, which
	  means that if you want to use GENPD.APP with Visual FoxPro, you must first
	  convert and rebuild it under Visual FoxPro.
	
	Use the ??? " " Command:
	
	1. Issue SET DEVICE TO PRINT and SET PRINTER TO commands to turn off all open
	  print commands.
	
	2. Issue a ??? " " command to open the printer in raw mode.
	
	3. Issue @ ... SAY commands to send control codes and text to the printer.
	
	4. After printing, issue a SET PRINTER TO command to flush the print buffer and
	  return control to the Windows printer driver.
	
	The following code demonstrates these steps:
	
	     SET DEVICE TO PRINT
	     SET PRINTER TO
	     ??? " "
	     @ 1,0 SAY 'NORMAL TEXT'
	     @ 2,0 SAY CHR(15) && Control code to turn compressed mode on
	     @ 2,0 SAY 'CONDENSED text?'
	     @ 3,0 SAY CHR(18) && Control code to turn compressed mode off
	     @ 3,0 SAY 'NORMAL again'
	     SET DEVICE TO SCREEN
	     SET PRINTER TO
	
	NOTE: In some circumstances, the last @ ... SAY command may not print. If this
	problem occurs, add an additional @ ... SAY command that prints a blank line (so
	that the lost line is just a blank). If adding a blank line is not an acceptable
	workaround, use one of the other methods listed in this article.
	
	Use the SET PDSETUP TO <Driver Name> Command:
	
	NOTE: This method will not work under Visual FoxPro unless the FoxPro 2.x file,
	GENPD.APP, exists. Visual FoxPro does not ship with GENPD.APP, which means that
	if you want to use GENPD.APP with Visual FoxPro, you must first convert and
	rebuild it under Visual FoxPro.
	
	1. Issue a SET PRINTER TO command to clear the print buffer of all open print
	  commands.
	
	2. Issue a SET PDSETUP TO <driver name> command to open the printer in raw
	  mode. You MUST already have an existing FoxPro 2.0 or 2.5 for MS-DOS printer
	  driver in the current resource file.
	
	  NOTE: The important property of this command is that setting a FoxPro for
	  MS-DOS printer driver opens the printer in raw mode. The printer driver
	  itself is not used to control printing (that is done though control codes).
	  In fact, any FoxPro for MS-DOS printer driver can be used.
	
	3. Issue a SET DEVICE TO PRINTER command to direct the @ ... SAY commands to the
	  printer.
	
	4. Issue @ ... SAY commands to send control codes and text to the printer.
	
	5. After printing, issue a SET DEVICE TO SCREEN command to redirect the output
	  to the screen.
	
	6. Issue a SET PRINTER TO command to flush the print buffer and return control
	  to the Windows printer driver.
	
	The following code demonstrates these steps:
	
	     SET PRINTER TO
	     SET PDSETUP TO "Epson"
	     SET DEVICE TO PRINT
	
	     @ 1, 0 SAY 'NORMAL text'
	     @ 2, 0 SAY  CHR(15) && Control code to turn compressed mode on
	     @ 2, 0 SAY  'CONDENSED text'
	     @ 3, 0 SAY  CHR(18) && Control code to turn compressed mode off
	     @ 3, 0 SAY 'normal again'
	
	     SET DEVICE TO SCREEN
	     SET PRINT TO
	
	Technique 2: Write to Text File and Copy to Printer Port
	--------------------------------------------------------
	
	1. Issue a SET DEVICE TO FILE <filename> command to direct output to a
	  file.
	
	2. Issue @ ... SAY commands to send control codes or text to the printer.
	
	3. Issue a SET DEVICE TO SCREEN command to redirect output to the screen.
	
	4. Issue a SET SAFETY OFF command so FoxPro for Windows does not confirm copying
	  the output file to the printer port (which it believes to be a file).
	
	5. Issue a COPY FILE <filename> TO <printer port>.DOS command to
	  copy the output file to the printer port.
	
	6. Issue a SET SAFETY ON command to turn safety on again.
	
	The following code demonstrates these steps:
	
	     SET DEVICE TO FILE output.prn
	
	     @ 1,0 SAY 'NORMAL text'
	     @ 2,0 SAY CHR(15) && Control code to turn compressed mode on
	     @ 2,0 SAY 'CONDENSED text'
	     @ 3, 0 SAY CHR(18) && Control code to turn compressed mode off
	     @ 3, 0 SAY 'Back to normal text'
	
	     SET DEVICE TO SCREEN
	     SET SAFETY OFF
	     COPY FILE output.prn TO lpt1.dos
	     SET SAFETY ON
	
	More Information About Printing to LPT1.DOS: When Windows prints to a file named
	LPT1.DOS, MS-DOS interprets the request to open the file LPT1.DOS as a request
	to send data to the printer port, and it sends the data out through its own
	printing handler. Because Windows thinks that LPT1.DOS is an MS-DOS file, the
	Print Manager is not used.
	
	For more information about this topic, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q68652 Printing to Windows LPT1.OS2 or LPT1.DOS Port
	
	  Q82749 Using LPT1.OS2, LPT1.DOS, or FILE: Ports When Printing
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: escape codes sequences native language @...say akz
	
	======================================================================
	Keywords          : kbprint kbPrinting kbvfp300 kbvfp500 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbVFP300 kbVFP500
	Version           : WINDOWS:2.5x,2.6x,3.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
