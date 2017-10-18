---
layout: page
title: "Q248816: Creating PDT Files for Epson Emulation Printers"
permalink: kb/248/Q248816/
---

## Q248816: Creating PDT Files for Epson Emulation Printers

	Article: Q248816
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 U.S. SP1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some printers, especially dot-matrix printers, do not support PCL command
	streams, which require a different approach to creating and modifying PDFs
	(Printer Definition File) used in making PDTs (Printer Definition Table). This
	article provides the steps to create a PDT to support Epson mode, which is
	common to many dot-matrix printers.
	
	MORE INFORMATION
	================
	
	In many cases, the dot-matrix printer is used for report and label generation
	using preprinted forms, so accurate placement of characters is critical. The
	most important settings are CPI (Characters Per Inch), which is the horizontal
	spacing, LPI (Lines Per Inch), which is the vertical spacing of the lines, and
	lines per page or page length. Also keep in mind, that most dot-matrix printers
	have settings for default form size, LPI, CPI and font. When you create a PDF
	try to keep it simple by changing only those items which are not defaulted in
	the printer. The use of the Generic/Text only driver delivers an ASCII stream of
	characters to the printer with no print formatting.
	
	Steps to Design a PDF:
	
	1. Obtain a sample of a properly printed form, using a ruler to measure the LPI,
	  CPI, form width and length. Accuracy is very important at this stage. Note
	  that fax transmission may alter the size, request that the end user measure
	  as well. Many printers can be set to Hex Print, which prints all the data and
	  codes to evaluate the control codes being sent.
	
	2. Note the font being used; is it 6 point, 10 point, Draft Quality, or NLQ
	  (near letter quality)?
	
	3. Verify the default settings of the printer. Most printers have a facility to
	  print out all the settings. Compare the needed settings to the default
	  settings and only change the necessary parameters.
	
	4. If the job fits the default settings of the printer, select the Generic/Text
	  only driver, as it simply passes an ASCII data stream to the printer with the
	  printer formatting the data; no PDT is used at all.
	
	5. If the LPI differs, modify the LL6 and LL8 commands in the PDT and select the
	  correct setting on the 3270 tab of the print session in SNA Server Manager.
	  SNA Server sends the LL6 or LL8 settings at the start of a job after the
	  START_JOB commands have been sent, overwriting whatever may have been sent in
	  the START_JOB. Settings other than 8 or 6 LPI are supported. See the
	  documentation for more information.
	
	6. If the form size differs, use either the lines per page or form size command
	  in the START_JOB. Better yet, if the form to be configured is the only form
	  used on the printer, change the default form size on the printer itself.
	
	7. If the CPI needs to be changed, set the appropriate value in the START_JOB.
	  Typical values are 10 CPI or 12 CPI.
	
	8. If the font needs to be changed, research the fonts available on the printer,
	  and then add the appropriate code to the START_JOB line.
	
	The idea is to keep modifications as slight as possible.
	
	Example:
	
	The following example lists the settings to place in a PDF file for 6 LPI, 10
	CPI, 8.5 inch forms on an Okidata printer or Tally printer using Epson FX100
	emulation:
	
	The following changes and additions were made:
	
	  10 CPI = 1B 50
	  06 LPI = 1B 32 8.5 inch form = 1B 43 33 (The command sequence is 1B 43 n, n is
	  the number of lines in hex to make the form. 51 lines are needed (8.5 inch
	  form x 6 LPI=51 lines per form). 51 decimal=33 hexadecimal so the sequence
	  becomes 1B 43 33.)
	
	A highly edited example of a PDF is as follows:
	
	  
	
	  /*****************************************************************************/ 
	  /*                                                                           */ 
	  /* Printer Definition File for Epson Emulation Printers                      */ 
	  /*                                                                           */ 
	  /*****************************************************************************/ 
	  LL6              EQU 1B 32            /* set line length 6 lines per inch    */ 
	  LL8              EQU 1B 30            /* set line length 8 lines per inch    */ 
	  E6L              EQU 1B 32            /* EPSON 6 LPI                         */  
	  E10              EQU 1B 50            /* EPSON 10 CPI                        */ 
	  E51              EQU 1B 43 33         /* 51 LINES PER PAGE                   */ 
	  RST              EQU 1B 40            /* Epson Reset                         */ 
	
	  /*****************************************************************************/ 
	  /* Control Codes                                                             */ 
	  /*****************************************************************************/ 
	  START_JOB = E51 E10 E6L               /* set 51 LInes per Page, 10CPI, 6LPI, */ 
	  END_JOB = RST                         /* Epson Reset                         */ 
	
	Cautionary Notes:
	
	All Epson emulations are not created equal. There are 3 Epson modes: 9-pin ESC/P,
	ESC/P and ESC/P2. Most vendors emulate ESC/P, although not necessarily
	completely. Write the PDF file with codes using ESC/P for greatest
	compatibility, testing each change. If the change does not take, obtain the
	correct code from the printer vendor's documentation.
	
	The print server sends the LL6 or LL8 values based on the GUI setting after all
	of the START_JOB commands have been sent, overriding any LPI commands sent
	earlier in the PDT as follows:
	
	  1B 43 33 1B 32 (6LPI, PDT) 1B 50 1B 30 (8LPI, GUI Setting)
	
	When you use the form size settings in Windows NT, Windows NT sends a form feed
	command when the configured form length (by counting the number of lines) is
	reached. If the printer is set for a different number of lines for a page size,
	the printer will form feed to its defined form size. An example may better
	illustrate this concept. If Windows NT is set for a form length of 8.5 inches at
	6 Lines per inch and the printer is set for an 11 inch form, Windows NT sends a
	form feed after the 51st line. The printer performs the form feed to the top of
	the next 11 inch form, throwing off the print job entirely. Setting the paper
	source to Continuous Feed in the Windows NT Spooler printer properties does not
	override the form size that must be entered so the Windows NT setting and the
	Printer setting must match.
	
	If, after matching form sizes, the print still does not seem to line up, there
	may be a difference in how Windows NT figures form length and the printer
	figures form length. To test this scenario, create a very long custom form in
	Windows NT and print using that form length. Observe where the printer is now
	performing the form feed to the next page and count the lines. Configure a form
	in Windows NT to match the number of lines that the printer is using, and the
	data will usually line up.
	
	Dot-matrix printers may be set for Perforation Skip Over, which may also throw
	off lines per page calculations.
	
	REFERENCES
	==========
	
	www.epson.co.uk/support/manuals/select/escp.htm
	www.oki.com
	Microsoft SNA Server Print Service White Paper
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 U.S. SP1
	
	=============================================================================
	
