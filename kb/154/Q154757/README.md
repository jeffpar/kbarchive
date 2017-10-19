---
layout: page
title: "Q154757: HOWTO: Determine if RDO Restartable Property is Set to False"
permalink: /kb/154/Q154757/
---

## Q154757: HOWTO: Determine if RDO Restartable Property is Set to False

	Article: Q154757
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Remote Data Objects (RDO) provided with Visual Basic give the programmer the
	ability to Requery an rdoResultset. The Requery method ensures that the
	rdoResultset contains the most recent data or enables the user to return
	different results for a prepared statement whose parameters have been changed.
	
	The Online Help suggests checking the Restartable property to determine if the
	rdoResultset supports requerying.
	
	MORE INFORMATION
	================
	
	The Online Documentation has the following advice:
	
	  Check the Restartable property before using the Requery method on an
	  rdoResultset. If the object's Restartable property is set to False, use
	  the OpenResultset method on the underlying rdoPreparedStatement to re-
	  execute the query.
	
	  You can use the Requery method to update an rdoResultset object's
	  underlying parameter query after the parameter values have been changed.
	  If the rdoPreparedStatement does not contain parameters, the Restartable
	  property is always True.
	
	In practice, however, the Restartable property of an rdoResultset is always True
	unless the Connection or the Statement handle is invalid. The Statement Handle
	will be invalid after closing the rdoResultset.
	
	This article does not apply to the Restartable property of a DAO Recordset.
	
	REFERENCES
	==========
	
	Online Help Restartable, ReQuery.
	
	Additional query words: kbVBp400 kbVBp600 kbdse kbDSupport kbVBp kbRDO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
