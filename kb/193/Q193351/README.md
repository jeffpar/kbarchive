---
layout: page
title: "Q193351: Trailing Blanks Removed from String in Reply Data"
permalink: /kb/193/Q193351/
---

## Q193351: Trailing Blanks Removed from String in Reply Data

	Article: Q193351
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A string padded on the right with spaces, or blanks, is returned from the
	mainframe. However, when it is returned to the client application program, the
	padding blanks are removed and replaced by a single null character.
	
	CAUSE
	=====
	
	This is the result of the Pad With Spaces option of Component Builder that is
	enabled by default. This Pad With Spaces check box is found in the Parameters or
	Recordset fields properties dialog box on the COBOL Definition tab.
	
	The documentation for this property is insufficient. It simply states, "Pad with
	spaces: If selected, COMTI will pad the string with spaces."
	
	The following two paragraphs describe what checking the item actually
	accomplishes.
	
	When a null-terminated string is sent to the mainframe computer, the null will be
	replaced with a blank, and the remainder of the string, out to its maximum
	length, will be padded with blanks.
	
	When a string padded on the right with blanks is returned from the mainframe
	computer, the trailing blanks are stripped off and replaced by a null character
	immediately after the last non-blank character of the string.
	
	The are some anomalies that you should be aware of. If the Pad With Spaces option
	is turned off or disabled, and an [in/out] null-terminated string is sent to the
	mainframe program, if the mainframe program appends additional data to the
	string, without removing the original null character, that additional data will
	not be delivered back to the client program. That is because COMTI does a
	forward search through the string and will find the first, or original, null
	character. Thus, the returned string compares equal to the original string and
	the data appended by the mainframe program is lost.
	
	Another anomaly is a variation of the problem presented in this KB article. If
	the Pad With Spaces option is turned on or enabled, and an [in/out] string,
	padded on the right with spaces, is sent to the mainframe program if the
	mainframe program does not modify the string; it simply returns it to the client
	program. The returned string will not compare equal to the original string
	because the trailing blanks are stripped off by COMTI.
	
	WORKAROUND
	==========
	
	1. Use the Microsoft Transaction Server (MTS) Explorer snap-in to shutdown
	  server processes.
	
	2. Select the COMTI component in question and delete it from its MTS package.
	
	3. Use Component Builder to open the component library and deselect the Pad With
	  Spaces option for the problematic string.
	
	4. Save the component library and reinstall it the component into its MTS
	  package.
	
	5. Resume testing.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbCOMTISearch kbCOMTI100 kbCOMTI100SP1
	Version           : WINDOWS:1.0,1.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
