---
layout: page
title: "Q253879: BUG: Forms Cannot Find Class Library When Calling .Exe File"
permalink: /kb/253/Q253879/
---

## Q253879: BUG: Forms Cannot Find Class Library When Calling .Exe File

	Article: Q253879
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run a form contained in an application (.app) file that is
	called from an executable (.exe) file, an error message is generated:
	
	  Error instantiating class. Cannot find ...
	
	CAUSE
	=====
	
	Visual FoxPro cannot find the class libraries for the form even though they may
	already be in memory. Because the libraries were excluded from the .app file,
	the form is looking for them on disk, and they cannot be found. Visual FoxPro
	does not search memory to find these missing classes.
	
	RESOLUTION
	==========
	
	The resolution to the problem is to clear the ClassLoc field for all records in
	the form.scx file and load the class libraries that are in the main .exe file.
	
	To clear the Classloc field in the form, issue the following code.
	
	NOTE: Ensure that you make a backup of the form or forms that are being updated.
	
	  UPDATE MyForm.SCX SET ClassLoc = ""
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	Copy the following code to a program (.prg) file called "SetFormClasses" (without
	the quotation marks):
	
	  *!*	Forms in VFP6 cannot find the classlibs used in the Form Designer if they
	  *!*	are excluded from the APP project but are loaded in the calling EXE.  This
	  *!*	program (SetFormClass) will load necessary classlibs in an APP called
	  *!*	from an EXE and is dependant upon the classlibs in the EXE because they
	  *!*	are excluded in the APP.
	  *!*
	  *!*	One important aspect to note is that the classlib field in the SCX file
	  *!*	must be cleared.  Be certain to make a copy of the form before clearing
	  *!*	the classloc field, or you may not be able to open the form in the Form
	  *!*	Designer.  The classlibs needed for the form will be loaded in in this
	  *!*	program if they are passed as parameters.
	  *!*
	  *!*	Parameters:
	  *!*		tcClasslib1
	  *!*		tcClasslib2
	  *!*		tcClasslib3
	  *!*		...
	  *!*		tcClasslibN
	  *!*
	  *!*	Syntax:
	  *!*		DO SetFormClasses WITH "MyClass1", "MyClass2", "MyClass3", ... "MyClassN"
	  *!*
	  *!*	This program must be run from the main program in the APP.
	  *!*	The variable lcCurrentAPP is assuming that this program is called
	  *!*	from the main program.
	
	  *!*	If an APP has a classlib loaded and it is unloaded here, then
	  *!*	returning to that APP will cause errors.  Need to release and reload the
	  *!*	classes in MAIN, but only if they are not loaded with the IN clause.
	
	  #DEFINE SFC_ADDITIVE .T.
	  *!*	Add as many parameters as necessary to cover all necessary classlibs
	  *!*	used in this module
	  LPARAMETERS tcClassLib1, tcClassLib2, tcClassLib3, tcClassLib4, tcClassLib5, ;
	     tcClassLib6, tcClassLib7  && Etc.
	
	  LOCAL lcClass, lnClass, lnIndex, nPos1, nPos2, nChars, nChar0, nChar1, lnParams
	  LOCAL ARRAY laClass[1], laParams[1]
	  LOCAL lcMainEXE, lcCurrentAPP
	  lnParams = PCOUNT()
	
	  *!*	Load the parameters into an array for quick reference
	  DIMENSION laParams[lnParams]
	  FOR lnIndex = 1 TO lnParams
	     laParams[lnIndex] = UPPER(EVAL("tcClassLib" + TRANSFORM(lnIndex)))
	  ENDFOR
	
	  lcMainEXE = SYS(16, 1)  && Main EXE
	  lcCurrentAPP = SYS(16, PROGRAM(-1) - 1)
	
	  lcClass = SET("CLASSLIB")
	  IF EMPTY(lcClass)
	     *!*	This is the first time in.  In addition, no class libraries have been
	     *!*	set anywhere.  Set them all here.  All classes will come from params
	     = ACOPY(laParams, laClass)
	     lnClass = lnParams
	
	     FOR lnIndex = 1 TO lnClass
	        laClass[lnIndex] = laParams[lnIndex]
	        DO SetClassLib WITH laClass, lnIndex, lcMainEXE, SFC_ADDITIVE
	     ENDFOR
	  ELSE
	     *!*	Class libraries have been set at some point in time.  We don't know
	     *!*	where they have been set, or if they are needed.  So, go through and
	     *!*	try to add each class library back into the the system.  Need to check
	     *!*	if it is already loaded "IN" somewhere.  If it is, then do not touch it.
	     *!*	If it is not, compare it with the required classlibs passed in by
	     *!*	parameters.  If it is not in the parameter list, leave it alone.  If it
	     *!*	is in the list and loaded "IN" already, then don't process them again.
	     *!*	Also need to check for new class libraries being added by this module.
	     *!*	If they are not found, add them in.
	
	     lnClass = OCCURS(",", lcClass) + 1  && Number of libs in memory
	     DIMENSION laClass[lnClass, 3]
	     laClass = .T.
	     *!*	laClass[1,1] is the class
	     *!*	laClass[1,2] is the class with full path
	     *!*	laClass[1,3] is a flag indicating this needs to be loaded
	
	     nPos1 = 1
	     *!*	Place the stem (filename only) into an array for resetting later
	     FOR lnIndex = 1 TO lnClass
	        nPos2 = AT(",", lcClass, lnIndex)  && Locate the end of the class string
	        nChars0 = IIF(nPos2 < 1, LEN(lcClass), nPos2 - nPos1)
	
	        *!*	Need to make sure that you don't include any IN clauses in the substring,
	        *!*	1) they will throw off the JUSTSTEM function
	        *!*	2) FoxPro already knows where to find them.
	        nChars1 = AT(".VCX IN ", SUBSTR(lcClass, nPos1, nChars0))
	        IF nChars1 > 0
	           *!*	VFP already knows where to find this classlib.  Do not reload this classlib
	           laClass[lnIndex,3] = .F.
	        ENDIF
	
	        nChars = IIF(nChars1 = 0, nChars0, nChars1)
	
	        laClass[lnIndex,1] = JUSTSTEM(SUBSTR(lcClass, nPos1, nChars))
	        laClass[lnIndex,2] = SUBSTR(lcClass, nPos1, nChars0)
	
	        nPos1 = nPos2 + 2 && New starting position
	     ENDFOR
	
	     *!*	If the loaded classlibs are also parameters,
	     *!*	mark them for release is not already marked for release
	     FOR lnIndex = 1 TO lnClass
	        IF ( laClass[lnIndex,3] = .T. )
	           *!*	Still marked for reload.  Passed the "IN" clause
	           IF ( ASCAN(laParams, laClass[lnIndex,1]) = 0 )
	              *!*	This module does not know about this class, don't unload it
	              laClass[lnIndex,3] = .F.
	           ELSE
	              *!*	This will be reloaded later
	              RELEASE CLASSLIB &laClass[lnIndex,2]
	           ENDIF
	        ENDIF
	     ENDFOR
	
	     *!*	Load all eligible classlibs
	     FOR lnIndex = 1 TO lnClass
	        IF laClass[lnIndex,3] = .T.
	           *!*	Classlib was previously released, add it back in
	           DO SetClassLib WITH laClass, lnIndex, lcMainEXE, SFC_ADDITIVE
	        ENDIF
	     ENDFOR
	
	     *!*	Now try to load all the classes that were passed in as parameters.
	     *!*	Those that don't load here will be loaded next
	     = ACOPY(laParams, laClass1)
	     lnClass = lnParams
	
	     FOR lnIndex = 1 TO lnClass
	        laClass1[lnIndex] = laParams[lnIndex]
	        DO SetClassLib WITH laClass1, lnIndex, lcMainEXE, SFC_ADDITIVE
	     ENDFOR
	
	  ENDIF
	
	  *!*	Check the parameters array for any classes that need to be loaded 
	  *!*	for this module.  Add them if necessary.
	  FOR lnIndex = 1 TO lnParams
	     IF ASCAN(laClass, laParams[lnIndex]) = 0 AND ;
	           ASCAN(laClass1, laParams[lnIndex]) = 0  && Add the new library
	        SET CLASSLIB TO (laParams[lnIndex]) IN (lcCurrentAPP) ADDITIVE
	     ENDIF
	  ENDFOR
	
	  PROCEDURE ClearElement
	     *!*	If there is an error setting the classlib, assume that it is because
	     *!*	it cannot be found.  Clear the reference to that element so the
	     *!*	local classes will not be messed up when loading.
	     LPARAMETERS taClass, tnElement
	     taClass[tnElement] = CHR(255)
	     RETURN
	
	  PROCEDURE SetClassLib
	     LPARAMETERS taClass, tnElement, tcMainEXE, tlAdditive
	     EXTERNAL ARRAY taClass  && Avoid compile time errors
	     LOCAL lcOnError
	     lcOnError = ON('ERROR')
	
	     ON ERROR DO ClearElement WITH taClass, tnElement
	
	     IF tlAdditive
	        SET CLASSLIB TO (taClass[tnElement]) IN (tcMainEXE) ADDITIVE
	     ELSE
	        SET CLASSLIB TO (taClass[tnElement]) IN (tcMainEXE)
	     ENDIF
	     ON ERROR &lcOnError
	     RETURN
	
	In the main program of the .app file, place a call to SetFormClasses with the
	following code:
	
	  DO SetFormClasses WITH "MyClass1", "MyClass2", ... "MyClassN"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There may be situations when an application (.app) with multiple modules is
	created. The modules may be updated, but the base .exe is not updated at the
	same time. The functionality of the base classes in the .exe files is still
	needed until the .exe is updated, but not any new functionality in the classes
	in development. The only way to do this is to exclude the classes from the .app.
	However, by doing so, Visual FoxPro is no longer able to find the class.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a project and save it as "MAIN" (without the quotation marks).
	
	   - Create a program (.prg) file and save it as "Main" (without the quotation
	     marks). Add the following code:
	
	  DO FORM Main
	  READ EVENTS
	  CLEAR EVENTS
	  SET CLASSLIB TO
	
	   - Create a new class named MyForm based on Form and store it in MyClass.
	   - Add a class named MyCommandButton based on CommandButton and store it in
	     MyClass.
	   - Create a form based on the new class MyForm. Remove the original form and
	     the form set. Place the following code in the Destroy event of the form:
	
	  CLEAR EVENTS
	
	     Save the form as "Main" (without the quotation marks).
	   - Drag and drop two command buttons based on MyCommandButton onto the form.
	   - In the click event of the first command button, add the following code.
	     Give this button the caption of Module1Form.
	
	  DO module1.APP WITH "Module1Form"
	
	   - In the click event of the second command button, add the following code.
	     Give this button the caption of Cancel.
	
	  THISFORM.RELEASE()
	
	   - Build an .exe file.
	
	2. Create a second project and save it as "Module1" (without the quotation
	  marks).
	
	   - Create a .prg file and call it "Module1Main" (without the quotation
	     marks). Add the following code:
	
	  LPARAMETERS cForm
	  *!* Uncomment this to see the workaround in action
	  *!*DO setformclasses WITH "MyClass"
	  DO FORM Module1Form
	
	   - Add the class library MyClass to the project.
	   - Create a new form based on the class MyForm and save it as Module1Form.
	     Remove the original form and the form set.
	   - Drag and drop one command button based on MyCommandButton from MyClass
	     onto the form. Add the following code to the click event:
	
	  THISFORM.RELEASE()
	
	   - Build an APP.
	
	3. Copy the .app file and the .exe file to a new folder.
	
	4. Run the .exe and click on Module1Form. Note that the following error message
	  appears:
	
	  Error instantiating class. Cannot find ...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
