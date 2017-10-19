---
layout: page
title: "Q258752: Creating PDT to Support an IBM Proprinter"
permalink: /kb/258/Q258752/
---

## Q258752: Creating PDT to Support an IBM Proprinter

	Article: Q258752
	Product(s): Microsoft SNA Server
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): sna4
	Last Modified: 13-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the behavior that may occur when you use or alter the
	default settings in the SNA Print Server that is printing to an IBM Proprinter.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	The default settings for the SNA Print Server are issued using printer control
	language (PCL) commands. For example, if 6LPI is set in the definition of the
	SNA Print Server, the SNA Print Server sends a 6LPI in a PCL command format to
	the printer. The IBM Proprinters does not support PCL commands, and the IBM
	Proprinter ignores the PCL commands and prints the printer default set. To
	change the default values, you must configure a Printer Definition Table (PDT).
	
	The PCL mode, the Epson mode, and the IBM mode are the three methods used to
	format a printer stream. Laser printers support the PCL mode, and dot matrix
	printers support the Epson mode and/or the IBM mode.
	
	For additional information about creating PDTs for PCL printers and Epson mode
	printing, please click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q248816 Creating PDT Files for Epson Emulation Printers
	
	The following is an example of a macro definition portion of a PDT file
	containing the available configuration options supported by the Epson emulation
	printers:
	
	  
	
	  /**********************************************************************/ 
	  /*                                                                    */ 
	  /*    PRINTER SESSION DEFINITION FILE FOR: Proprinter XL 4202-1       */ 
	  /*                                                                    */ 
	  /**********************************************************************/ 
	
	  BEGIN_MACROS
	  /* The following values are standard for most printers.  Check your   */ 
	  /* printer manual to verify that these are correct for your printer   */ 
	  NUL EQU 00             /* Nul character               */ 
	  BEL EQU 07             /* Beeper                      */ 
	  BAK EQU 08             /* Back Space                  */ 
	  TAB EQU 09             /* Tab                         */ 
	  LFF EQU 0A             /* Line Feed                   */ 
	  VTB EQU 0B             /* Vertical Tab                */ 
	  FFF EQU 0C             /* Form Feed                   */ 
	  CRR EQU 0D             /* Carriage Return             */ 
	  P05 EQU 1B 57 01       /* 5 Pitch-Characters/inch     */ 
	                      /* Same as Double Wide         */ 
	  SEL EQU 11             /* Select Printer              */ 
	  P10 EQU 12             /* 10 Pitch-Characters/inch    */ 
	  P12 EQU 1B 3A          /* 12 Pitch-characters/inch    */ 
	  P17 EQU 12 0F          /* 17.1 Pitch-Characters/inch  */ 
	  CDW EQU 1B 57 00       /* Cancel Double Wide contin.  */ 
	  CDL EQU 14             /* Cancel Double Wide line     */ 
	  ESC EQU 1B             /* Escape                      */ 
	  CAN EQU 18             /* Cancel Data                 */ 
	  SPA EQU 20             /* Space                       */ 
	  CS2 EQU 1B 36          /* Select Character Set 2      */ 
	  CS1 EQU 1B 37          /* Select Character Set 1      */ 
	  SVT EQU 1B 42          /* Set Vertical Tabs           */ 
	  SFL EQU 1B 43 42       /* Set Form Length             */ The 42 is the hexadecimal equivalent of 66 so this sets the form length to 66 lines. 
	  SHT EQU 1B 44          /* Set Horizonal Tabs          */ 
	  SDS EQU 1B 47          /* Start Double Strike         */ 
	  CDS EQU 1B 48          /* Cnacel Double Strike        */ 
	  SSP EQU 1B 4E          /* Set skip perforation        */ 
	  CSP EQU 1B 4F          /* Cancel skip perforation     */ 
	  SPS EQU 1B 50 01       /* Select PS font              */ 
	  CPS EQU 1B 50 00       /* PS off                      */ 
	  CAT EQU 1B 52          /* Cancel all tabs Clears VT   */ 
	                      /* and sets HT every 8 position*/ 
	  CSS EQU 1B 54          /* Cancel Subscript or Superscr*/ 
	  SSO EQU 1B 53 00       /* Set Superscript over        */ 
	  SSU EQU 1B 53 01       /* Set Subscript under         */ 
	  SUL EQU 1B 2D 01       /* Start Underline             */ 
	  CUL EQU 1B 2D 00       /* Cancel Underline            */ 
	  LL2 EQU 1B 41 24 1B 32 /* Setline length 2 lines/inch*/ 
	  LL3 EQU 1B 41 18 1B 32 /* Setline length 3 lines/inch*/ 
	  LL4 EQU 1B 41 12 1B 32 /* Setline length 4 lines/inch*/ 
	  LL6 EQU 1B 41 0C 1B 32 /* Set line length 6 lines/inch*/ 
	  LL8 EQU 1B 41 09 1B 32 /* Set line length 8 lines/inch*/ 
	  LL0 EQU 1B 41 07 1B 32 /* Set line length 10 lines/inc*/ 
	                      /* actually 7/72 inch          */ 
	                      /* Command is ESC A (n) n/72 = # of lines, */ 
	                      /* followed by ESC 2 to initiate line setting */ 
	  SDQ EQU 1B 49 00       /* Select Draft Printing Quality               */ 
	  SLQ EQU 1B 49 02       /* Select Letter Printing Quality              */ 
	  VLF EQU 1B 4A          /* Variable Line Feed 1/216 inch units        */ 
	  END_MACROS
	
	For example, if the printout requires eight lines per inch, at ten characters per
	inch, use the following macro commands in the START_JOB entry:
	
	  
	
	  START_JOB = LL8 P10
	
	CAUTION: Many examples of PDFs include a reset command in the START_DOC entry to
	set the printer back to the default settings. If the printer is a dot matrix
	printer and a non-default page size command sequence is sent, the print flow for
	subsequent print jobs will not have the "Top of Form" set correctly and may not
	line up.
	
	REFERENCES
	==========
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	For an online reference of the OkiData User Manual, please see the following Web
	site:
	
	  http://www.oki.com (http://www.oki.com)
	
	For more information about the IBM PDT, see the IBM PDT white paper, IBM/3270
	Printer Definition File.
	
	For more information about the Microsoft SNA Print Service, see the Microsoft SNA
	Print Service white paper at the following Web site:
	
	  http://www.microsoft.com/sna (http://www.microsoft.com/sna)
	
	For more information about the IBM ProPrinter, please see the printed copy of the
	IBM Proprinter User Manual.
	
	Additional query words:
	
	======================================================================
	Keywords          : sna4 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400
	Version           : :3.0,4.0
	
	=============================================================================
	
