---
layout: page
title: "Q235163: Distributed Applications with Microsoft Visual Basic 6.0 MCSD Tr"
permalink: /kb/235/Q235163/
---

## Q235163: Distributed Applications with Microsoft Visual Basic 6.0 MCSD Tr

	Article: Q235163
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 24-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Distributed Applications with Microsoft Visual Basic 6.0 MCSD Training Kit ISBN 0-7356-0833-4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Distributed Applications with Microsoft
	Visual Basic 6.0 MCSD Training Kit, ISBN 0-7356-0833-4.
	
	The following topics are covered:
	
	- Page 53: First "KeyPress" Should Be "KeyDown"
	
	- Page 67: "Property Let" Should Be "Property Set"
	
	- Page 71: "m_FileType" Should Be "FileType"
	
	- Page 148: Incorrect Statement Regarding ADO
	
	- Page 212: Correction To "Read Uncommitted Isolation Level" Section
	
	- Page 217: Keyset-Driven Client-Side Cursors Not Supported
	
	- Page 245: Incorrect Information About SQL Debugging Server Location
	
	- Page 260: Error In The Code
	
	- Page 262: Information In Note Is Incorrect
	
	- Page 301: Correction To Code Sample
	
	MORE INFORMATION
	================
	
	Page 53: First "KeyPress" Should Be "KeyDown"
	---------------------------------------------
	
	On page 53, under "using Events for Field-Level Validation", change:
	
	"As with the form-level validation, you can use a control's KeyPress, KeyUp, and
	KeyPress events."
	
	To:
	
	"As with the form-level validation, you can use a control's KeyDown, KeyUp, and
	KeyPress events."
	
	
	Page 67: "Property Let" Should Be "Property Set"
	------------------------------------------------
	
	On page 67, in the code sample under the Property Set section,
	
	Change:
	"Public Property Let ClipArt(EmbeddedBitmap As Object)"
	
	To:
	"Public Property Set ClipArt(EmbeddedBitmap As Object)"
	
	
	Page 71: "m_FileType" Should Be "FileType"
	------------------------------------------
	
	On page 71, in the second code sample paragraph,
	
	Change:
	"m_FileType = ft"
	
	To:
	"FileType = ft"
	
	
	Page 148: Incorrect Statement Regarding ADO
	-------------------------------------------
	
	Change:
	"ADO combines the best of RDO and ADO and will eventually replace them."
	
	To:
	"ADO combines the best of RDO and DAO and will eventually replace them."
	
	
	Page 212: Correction To "Read Uncommitted Isolation Level" Section
	------------------------------------------------------------------
	
	On page 212, under "Read Uncommitted Isolation Level", the read committed
	isolation level is incorrectly identified as the least restrictive isolation
	level.
	
	Change:
	"The read committed isolation level is the SQL Server default, and is the least
	restrictive of the four isolation levels. Using the read committed isolation
	level makes it possible to read uncommitted or dirty data."
	
	To:
	"The read uncommitted isolation level is the least restrictive of the four
	isolation levels. Using the read uncommitted isolation level makes it possible
	to read uncommitted or dirty data."
	
	The phrase "The read committed isolation level is the SQL Server default." should
	become the first sentence in the second paragraph under "Read Committed
	Isolation Level" on page 211.
	
	
	Page 217: Keyset-Driven Client-Side Cursors Not Supported
	---------------------------------------------------------
	
	On page 217, in the second paragraph under "Client-Side Cursors", the words
	"keyset-driven" need to be removed from the first sentence, as keyset-driven
	client-side cursors are not supported by SQL Server.
	
	Change: "If a large number of rows (or records) are returned, static and
	keyset-driven client-side cursors place a significant load on a workstation."
	
	To: "If a large number of rows (or records) are returned, static client-side
	cursors place a significant load on a workstation."
	
	
	Page 245: Incorrect Information About SQL Debugging Server Location
	-------------------------------------------------------------------
	
	On page 245, in the third bulleted item,
	
	Change:
	"Installed the SQL Debugging Server from the Supplemental Course Material CD-ROM
	that accompanies this book."
	
	To:
	"Installed the SQL Debugging Server from the Visual Basic Enterprise Setup
	CD-ROMs."
	
	
	Page 260: Error In The Code
	---------------------------
	
	On page 260, in the code at the top of the page, change the Where clause as
	follows.
	
	Change:
	"WHERE @pubname = p.pub_name"
	
	To:
	"WHERE p.pub_name = @pubname"
	
	
	Page 262: Information In Note Is Incorrect
	------------------------------------------
	
	The note on page 262 should read:
	
	"You must run the Microsoft SQL Debugging Server Setup on your server computer
	prior to debugging a stored procedure using the T-SQL debugger. The SQL
	Debugging Server Setup file is located in the \SQDBG_SS folder on the Visual
	Basic Enterprise Setup CD-ROMs."
	
	
	Page 301: Correction To Code Sample
	-----------------------------------
	
	On page 301, the sample always returns a value of 1. Please replace the existing
	code with the following:
	
	  CREATE PROCEDURE SetRoomStatus
	  (
	  	@RoomNumber varchar(20) = '0',
	  	@RetCode int OUTPUT
	  )
	  AS
	  If Exists (SELECT Available
	  	FROM Rooms
	  	WHERE RoomID = @RoomNumber
	  	AND Available = 1)
	  BEGIN
	  	UPDATE Rooms
	  	SET Available = 0
	  	WHERE RoomID = @RoomNumber
	  	SET @RetCode = 1
	  END
	  ELSE
	  BEGIN
	  	SET @RetCode = 0
	  END
	  RETURN @RetCode
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0833-4 devbook vb60 tkbook
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
