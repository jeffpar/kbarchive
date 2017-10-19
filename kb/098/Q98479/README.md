---
layout: page
title: "Q98479: DOC: CHKBOOK.CLW File Documents ExtraDDX Lines Incorrectly"
permalink: /kb/098/Q98479/
---

## Q98479: DOC: CHKBOOK.CLW File Documents ExtraDDX Lines Incorrectly

	Article: Q98479
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbsample kbdocfix kbdocerr kbnokeyword kbwizard kbDlg kbMFC kbVC100 kbVC200 kbVC210 kbG
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Foundation Class Library Technote #26, provided with Microsoft
	Visual C++ version 1.0, includes the following statement:
	
	  An example of custom DDX with validation can be found in the
	  CHKBOOK sample application. See DDX_DollarsCents in DOLLCENT.CPP
	  for an sample implementation of a custom DDX routine and
	  CHKBOOK.CLW for the corresponding example ExtraDDXCount and
	  ExtraDDX1 entries in the [General Info] section of the .CLW file.
	
	However, the ExtraDDXCount and ExtraDDX1 statements are not included in the .CLW
	file. To address this situation, append the following lines to the [General
	Info] section of the CHKBOOK.CLW file:
	
	  ExtraDDXCount=1
	  ExtraDDX1=E;;Cents;DWORD;0;DollarsCents;(100*dollars)+cents
	
	This documentation error was corrected in MFC for Windows, version 2.5.
	
	MORE INFORMATION
	================
	
	For more information about the ExtraDDXCount and ExtraDDX1 statements, please
	refer to Technote #26. Note that the ExtraDDX1 statement includes two
	consecutive semicolon (;) characters to ignore the second field. The Technote
	does not list the contents of the second field. The Technote states the
	following:
	
	- The general format of these special entries is: ExtraDDXCount=n ; where n is
	  the number of ExtraDDX? lines to follow
	  ExtraDDX?=<keys>;<prompt>;<type>;<initValue>;<DDX_Proc>[;
	  <DDV_Proc>;<prompt1>;<arg1>;[<prompt2>;<fmt2>]]
	  ; Where ? is a number 1-n indicating which DDX type in the list ; that is
	  being defined.
	
	However, the Technote also defines a <vb-keys> field that belongs between
	the <keys> and <prompt> fields. Therefore, the true format is as
	follows:
	
	  ExtraDDX?=<keys>;<vb-keys>;<prompt>;<type>;<initValue>;<DDX_Proc>;
	
	  <comment>[;<DDV_Proc>;<prompt1>;<fmt1>[;<prompt2>;<fmt2>]]
	
	Additional query words: 1.00 2.00 2.10 ClassWizard noupdate
	
	======================================================================
	Keywords          : kbsample kbdocfix kbdocerr kbnokeyword kbwizard kbDlg kbMFC kbVC100 kbVC200 kbVC210 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	
