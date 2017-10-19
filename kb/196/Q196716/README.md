---
layout: page
title: "Q196716: WD97: Selecting &quot;(None)&quot; Resets Filter Comparison"
permalink: /kb/196/Q196716/
---

## Q196716: WD97: Selecting &quot;(None)&quot; Resets Filter Comparison

	Article: Q196716
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the Query Options dialog box, if you delete a query that precedes another
	query, the comparison criteria for all subsequent queries change to match that
	of the query that was deleted.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For example, if your query options are set up as follows
	
	            Field:          Comparison:          Compare to:
	
	            <field1>        is Blank             (empty)
	  Or        <field2>        Equal to             (text)
	  Or        <field3>        is Not Blank         (empty)
	  Or        <field4>        Not Equal to         (text)
	  Or        <field5>        Less than            (text)
	
	and you modify the <field1> entry by selecting (none) from the Field list,
	your query changes to this:
	
	            <field2>        is Blank             (text)
	  Or        <field3>        is Blank             (empty)
	  Or        <field4>        is Blank             (text)
	  Or        <field5>        is Blank             (text)
	
	Your query should change to this:
	
	            <field2>        Equal to             (text)
	  Or        <field3>        is Not Blank         (empty)
	  Or        <field4>        Not Equal to         (text)
	  Or        <field5>        Less than            (text)
	
	You can find these query options on the Filter Records tab. To locate this tab,
	follow these steps:
	
	1. Open the mail merge main document.
	
	2. On the Tools menu, click Mail Merge.
	
	3. Under "Merge the data with the document", click Query Options.
	
	Additional query words: filter filtering queries same change changes comparison 8.0 8.00
	
	======================================================================
	Keywords          : kbdta word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
