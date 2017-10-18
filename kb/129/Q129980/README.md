---
layout: page
title: "Q129980: INFO: Private Data Session Resets the Environment"
permalink: kb/129/Q129980/
---

## Q129980: INFO: Private Data Session Resets the Environment

	Article: Q129980
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv kbnokeyword kbvfp300 kbvfp500 kbvfp600
	Last Modified: 10-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A data session is a set of work areas used by a form, form set, report, or
	label. This article explains the use of a private data session in a form or form
	set and the settings it affects.
	
	MORE INFORMATION
	================
	
	When a form or a form set is loaded, it uses the Default Data session by
	default. This means that the work areas and all settings are global. You can
	however define private data sessions with your form and form sets by modifying
	the DATASESSION property of the form.
	
	When a data session is private, work areas are private to the object. Thus, two
	forms can use the same tables, and the record pointer can move independently in
	both forms. This can be particularly useful with the Visual FoxPro object model,
	where multiple instances of the same object can exist and you might need to
	access multiple records in the same table.
	
	In addition to scoping work areas, a private data session of a form affects some
	SET commands that control the environment. Private data sessions use:
	
	- The default Visual FoxPro settings.
	
	Modifying these settings in a program or in the Command window has no effect on
	the SET commands if a form has a PRIVATE data session. The following SET
	commands are scoped to private data sessions:
	
	  SET ANSI
	  SET AUTOSAVE
	  SET BLOCKSIZE
	  SET CARRY
	  SET CENTURY
	  SET COLLATE
	  SET CONFIRM
	  SET CURRENCY
	  SET DATABASE
	  SET DATE
	  SET DECIMALS
	  SET DELETED
	  SET DELIMITERS
	  SET EXACT
	  SET EXCLUSIVE
	  SET FIELDS
	  SET FIXED
	  SET LOCK
	  SET MARK TO
	  SET MEMOWIDTH
	  SET MULTILOCKS
	  SET NEAR
	  SET NULL
	  SET PATH
	  SET POINT
	  SET REFRESH
	  SET REPROCESS
	  SET SAFETY
	  SET SEPARATOR
	  SET TALK
	  SET UNIQUE
	
	If you need to modify the default settings that are used by a form with a private
	data session, you can do the following:
	
	- If you have a Data Environment and the AUTOLOADTABLES property is set to .T.,
	  you can add your SET code in the BEFOREOPENTABLES event handler. This event
	  is executed before the tables are opened. The BEFOREOPENTABLES event is
	  executed before the Load event of the Form Set. For example, if the default
	  setting for TALK is ON, and you want to modify this setting while your form
	  is running, type the following in the Method for the BEFOREOPENTABLES event:
	
	        SET TALK OFF
	
	- If you do not have a DataEnvironment associated with a form, place the code
	  in the LOAD event of the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnokeyword kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbinfo
	
	=============================================================================
	
