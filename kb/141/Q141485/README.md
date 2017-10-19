---
layout: page
title: "Q141485: FIX: LNK1152 &amp; LNK1141 When Linking OLE Control to Mapi32.lib"
permalink: /kb/141/Q141485/
---

## Q141485: FIX: LNK1152 &amp; LNK1141 When Linking OLE Control to Mapi32.lib

	Article: Q141485
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbole kbCtrl kbDLL kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate
	Last Modified: 14-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to link an OLE Control project with Mapi32.lib results in the
	following warnings and errors:
	
	  warning LNK4022: cannot find unique match for symbol "DllCanUnloadNow"
	
	  warning LNK4002: _DllCanUnloadNow defined in C:\MSDEV\LIB\MAPI32.LIB
	
	  warning LNK4002: _DllCanUnloadNow@0 defined in C:\MSDEV\MFC\lib\mfcs40d.lib
	
	  warning LNK4002: _DllCanUnloadNow@0 defined in C:\MSDEV\LIB\oleaut32.lib
	
	  warning LNK4022: cannot find unique match for symbol "DllGetClassObject"
	
	  warning LNK4002: _DllGetClassObject defined in C:\MSDEV\LIB\MAPI32.LIB
	
	  warning LNK4002: _DllGetClassObject@12 defined in
	  C:\MSDEV\MFC\lib\mfcs40d.lib
	
	  warning LNK4002: _DllGetClassObject@12 defined in C:\MSDEV\LIB\oleaut32.lib
	
	  fatal error LNK1152: cannot resolve one or more undecorated symbols
	
	  fatal error LNK1141: failure during build of exports file
	
	CAUSE
	=====
	
	The import library for the Mapi32.dll (Mapi32.lib) incorrectly exports the
	DllCanUnloadNow and DllGetClassObject functions. These functions should be
	exported privately and not included in the import library.
	
	RESOLUTION
	==========
	
	To work around this problem, build the Mapi32.lib import library from scratch by
	using the Lib.exe utility included with Visual C++ 4.0.
	
	Copy the sample code listed below into a text file, and save it as Mapi32.def.
	From the command prompt, enter the following command line to execute the Lib.exe
	utility and build a new Mapi32.lib import library:
	
	  LIB /DEF:MAPI32.DEF
	
	Replace the incorrect Mapi32.lib file located in the ~\Msdev\Lib directory with
	this newly created Mapi32.lib file, and rebuild the OLE Control project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	For additional information on how to build import libraries without access to
	source files, please refer to the following article in the Microsoft Knowledge
	Base:
	
	  Q131313 How to Create 32-bit Import Libraries Without .OBJs or Source
	
	Sample Code
	-----------
	
	  ; Mapi32.def : Used DUMPBIN /EXPORTS to determine the functions and
	  ; ordinal values listed in the EXPORTS section below. Note
	  ; DllCanUnloadNow, DllGetClassObject, and WEP are NOT listed below.
	
	  LIBRARY      "MAPI32.DLL"
	
	  EXPORTS
	        BMAPIAddress      @35
	        BMAPIDetails      @37
	        BMAPIFindNext     @34
	        BMAPIGetAddress   @36
	        BMAPIGetReadMail  @33
	        BMAPIReadMail     @32
	        BMAPIResolveName  @38
	        BMAPISaveMail     @31
	        BMAPISendMail     @30
	        MAPIAddress       @19
	        MAPIDeleteMail    @17
	        MAPIDetails       @20
	        MAPIFindNext      @16
	        MAPIFreeBuffer    @18
	        MAPILogoff        @12
	        MAPILogon         @11
	        MAPIReadMail      @15
	        MAPIResolveName   @21
	        MAPISaveMail      @14
	        MAPISendDocuments @10
	        MAPISendMail      @13
	
	Additional query words: kbVC400bug LNK1152 LNK1141 LNK4022 LNK4002 4.00 Win32 sdk ocx ole control cdk 4.10
	
	======================================================================
	Keywords          : kbole kbCtrl kbDLL kbMFC kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC32bitSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
