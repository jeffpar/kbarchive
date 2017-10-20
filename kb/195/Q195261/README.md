---
layout: page
title: "Q195261: BUG: Operating System Regional Settings Affect VFP COM Objects"
permalink: /kb/195/Q195261/
---

## Q195261: BUG: Operating System Regional Settings Affect VFP COM Objects

{% raw %}

	Article: Q195261
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbvfp600bug kbDSupport
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you call a method of a COM object written in Visual FoxPro 6.0, the
	following error might appear:
	
	  OLE error code 0x8002801d: Library not registered.
	
	CAUSE
	=====
	
	The Visual FoxPro COM object was built on an operating system that uses a
	different language ID (LCID) regional setting than the one that the COM object
	is being instantiated on.
	
	RESOLUTION
	==========
	
	Do one of the following to resolve this problem:
	
	- Generate a type library (TLB) using the LCID ID that the target operating
	  system is using. You must distribute this locale-specific TLB with the COM
	  object.
	
	- You can run the following sample program to stamp the type library with the
	  language neutral LCID (0x0000). This alters the type library so that it can
	  be used with any regional setting. Save the following code to a program named
	  Tag_TLB_LCID.
	
	
	Sample Code
	-----------
	
	     ** Begin program code **
	     ********************************************************
	     *   Program:  Tag_TLB_LCID
	     *
	     *   Param:    TLB_FileName [,LCID]
	     *
	     *   Note:  The first param can have any extension (for example, DLL).
	     *
	     *   This utility tags a Visual FoxPro-created TLB file with the LCID
	     *   specified or with LANG_NEUTRAL by default. This allows
	     *   COM DLLs created with Visual FoxPro 6.0 to be distributed to
	     *   operating systems that have different Language or Dialect
	     *   (sublanguage) settings. This has only been tested on
	     *   TLBs created with Visual FoxPro 6.0, and is not guaranteed to
	     *   work correctly on all TLBs created with Visual FoxPro 6.0.
	     *
	     *   The TLB file format could not be completely reverse-
	     *   engineered, so you must look for a marker that you believe
	     *   will always point you to the typelib description field.
	     *   the LCID appears nine bytes after that.
	     *
	     *   The original TLB file is backed up, with _ORIG_LCID
	     *   tacked on to the name (for example, Test_ORIG_LCID.TLB)
	     *
	     *   If it is successful, the procedure returns ".T.".
	     *
	     *   For information on what to pass as an LCID for a particular
	     *   region, look at the #DEFINEs in FoxPro.H.
	     *
	     ***********************************************************
	
	     *  Localizable strings:
	     #DEFINE D_GETFILE_CAPTION_LOC   "Select a Type Library to modify"
	     #DEFINE D_NO_TLB_LOC "Could not open Type Library, ;
	     or Type Library ;is empty."
	     #DEFINE D_ERROR_PARSING_TLB_LOC   "Typelib has no description? ;
	      Error parsing TLB."
	     #DEFINE D_CANNOT_FIND_FILE_LOC   "Cannot find file '%s'."
	     #DEFINE D_BACKUP_FILENAME_POSTFIX   "_ORIG_LCID.TLB"
	
	     *  Non-localizable definitions
	     #DEFINE LANG_NEUTRAL 0x0000
	     #DEFINE D_OBJECT_DEF_MARKER   "*\Rffff*#"
	
	     *****************************************
	     *  Code begins
	     *****************************************
	     LPARAMETERS cDLLName, nLCID
	     LOCAL cLCID, cTLBContents, nTypeLibDesc, nDescLength, nLangIDLocation
	     LOCAL cOldSafety, cTargetFileName, nLastMarker, nOffset
	
	     *  If no filename passed, prompt for a file.
	     IF PCOUNT() < 1
	        cDLLName = "*.DLL"
	        cDLLName = GETFILE("DLL,TLB", D_GETFILE_CAPTION_LOC)
	        IF EMPTY(cDLLName)
	           *  User pressed cancel.
	           RETURN .f.
	        ENDIF
	     ENDIF
	
	     *  If no LCID passed, assume LANG_NEUTRAL (0x0000).
	     IF PCOUNT() < 2
	        nLCID = LANG_NEUTRAL
	     ENDIF
	
	     *  Convert it to a two-byte string, with the low byte first.
	     cLCID = CHR(BITAND(nLCID, 0xFF)) + ;
	           CHR(BITRSHIFT(BITAND(nLCID, 0xFF00),8))
	
	     *  If not a TLB file, replace the extension with .tlb.
	     IF ! UPPER(RIGHT(ALLTR(cDLLName), 4)) = ".TLB"
	        cDLLName = AddBS(JustPath(cDLLName)) + JustStem(cDllName) + ".TLB"
	        IF NOT FILE(cDLLName)
	           Messagebox(STRTRAN(D_CANNOT_FIND_FILE_LOC, "%s", cDllName))
	           RETURN .F.
	        ENDIF
	     ENDIF
	
	     *  TLBs are never huge, so just use FILETOSTR instead of FOPEN, and so
	     *  forth.
	     cTLBContents = FILETOSTR(cDllName)
	     IF TYPE("cTLBContents") # "C" OR EMPTY(cTLBContents)
	        Messagebox(D_NO_TLB_LOC)
	        RETURN .F.
	     ENDIF
	
	     *  Find TypeLib Description, which is just past the last
	     *  occurrence of *\Rffff*#.  Actually, if there are more than 15
	     *  COM objects in the DLL, the number (written in ascii) that
	     *  comes just past the # can be more than one digit,
	     *  so we need to count from the eszet (0xDF) that comes just after.
	     nLastMarker = RAT(D_OBJECT_DEF_MARKER, cTLBContents)
	     nOffset = AT(CHR(0xDF), SUBSTR(cTLBContents, nLastMarker, 20))
	     nTypeLibDesc = nLastMarker + nOffset + 97
	
	     *  Assume description will not be more that 255 bytes, so only read one
	     *  byte of length field.
	     nDescLength = ASC(SUBSTR(cTLBContents, nTypeLibDesc, 1))
	     IF nDescLength = 0
	        Messagebox(D_ERROR_PARSING_TLB_LOC)
	        RETURN .F.
	     ENDIF
	
	     *  Now that you have the description length, you know exactly
	     *  where the LCID is written.
	     nLangIDLocation = nTypeLibDesc + nDescLength + 10
	
	     *  Back up original file.
	     cOldSafety = SET("SAFETY")
	     SET SAFETY OFF
	     cTargetFileName = ADDBS(JUSTPATH(cDllName)) + JUSTSTEM(cDLLNAME) +;
	     D_BACKUP_FILENAME_POSTFIX
	     ERASE (cTargetFileName)
	     RENAME (cDLLName) TO (cTargetFileName)
	
	     *  Now, write your file.
	     STRTOFILE(LEFT(cTLBContents, nLangIDLocation - 1) + cLCID + ;
	           SUBSTR(cTLBContents, nLangIDLocation + 2), cDLLName)
	
	     *  Restore environment settings.
	     SET SAFETY &cOldSafety
	
	     RETURN .T.
	     ** End program code **
	
	After you build a Visual FoxPro COM object, you can call the Tag_TLB_LCID program
	to stamp the type library with the language neutral LCID using the following
	syntax:
	
	     DO Tag_TLB_LCID WITH "<your dll filename>"
	
	This functionality could be implemented using a project hook class. Use the
	AfterBuild event of the project hook class to make the sample program call.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. BUILD DLL foxsrch FROM HOME(2) + "servers\gopher\foxsrch.pjx".
	
	2. In the Control Panel, click Regional Settings.
	
	3. Choose a different Regional Setting, and click OK.
	
	4. Run the following code:
	
	     ox=NewObject("foxsrch.gopher")
	     ox.updatede
	
	RESULT: The following error message appears:
	
	  OLE error code 0x8002801d: Library not registered.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbvfp600bug kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
