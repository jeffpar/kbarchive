---
layout: page
title: "Q229020: FIX: Date in @ GET Displays Incorrect Year With SET CENTURY OFF"
permalink: /kb/229/Q229020/
---

## Q229020: FIX: Date in @ GET Displays Incorrect Year With SET CENTURY OFF

	Article: Q229020
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Visual FoxPro application written using @ GET commands. You have
	issued a SET CENTURY OFF command in your application code. If you use an @ GET
	referring to a date variable or field, the year portion of the date might
	display incorrectly when the @ GET does not have focus. Note that the underlying
	data is unaffected, only the display may be incorrect.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code from a program (.PRG) file:
	
	  CLEAR
	  SET CENTURY OFF
	  dDate = {^1999/04/05}
	  cString = "Another GET"
	  @ 1,1 GET dDate SIZE 1,10 FONT "Courier New",10
	  @ 3,1 GET cString FONT "Courier New",10
	  READ CYCLE
	
	2. Tab between the two @ GETs. The year value in the first @GET will be 1999
	  when it has focus and 2019 when the focus moves to the second @ GET.
	
	3. Type 01/01/01 in the date field, and then press Tab a few times. The year
	  value of first @ GET will be 2001 when it has focus and the year value will
	  be 2020 when the second @ GET has focus.
	
	4. If you monitor the value of dDate in the Debugger Locals window while tabbing
	  between the two @GETS, you will see its value remains unchanged although the
	  display does change.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp600 kbvfp600bug kbXBase kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
