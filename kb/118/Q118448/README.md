---
layout: page
title: "Q118448: PC Ext: Features and Uses of EXTERNAL.EXE F2 Key Option"
permalink: kb/118/Q118448/
---

## Q118448: PC Ext: Features and Uses of EXTERNAL.EXE F2 Key Option

	Article: Q118448
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run the External Mail program (EXTERNAL.EXE), you can view the mail
	transfer status among the various postoffices by pressing the F2 key.
	
	MORE INFORMATION
	================
	
	Pressing the F2 key while the External Mail program is in an active session will
	display statistics for each postoffice. The postoffice whose statistics are
	being viewed appears in the lower-left corner. You can use the PAGE DOWN key to
	cycle through the postoffices that are currently being serviced. The bottom line
	of the display shows the status of the postoffice being viewed (normally,
	"Status: OK").
	
	In the middle of the F2 screen, under the heading "Dispatch Mail Postoffice
	Status," is a list of postoffices that are considered to be external postoffices
	to the postoffice statistics shown in the lower-left corner.
	
	Under this "Dispatch Mail Postoffice Status" heading are nine column titles:
	
	  Column Title   Description
	  -----------------------------------------------------------------------
	
	  Network        The network name of the external postoffice
	  Postoffice     The postoffice name
	  Serial#        The serial number
	  Status         Connection status to the postoffice, usually "OK"
	  R#             Count of errors encountered while moving messages (0-255)
	  Sent           Messages sent at this external instance
	  Session        Messages moved during this session
	  MTD            Total messages sent for the month
	  YTD            Total messages sent for the year
	
	The R# column displays a count of errors that have occurred while attempting to
	move mail to this postoffice. (NOTE: This R# entry is not valid for drives that
	are in NO-REF status.)
	
	If the R# reaches the maximum value of 255, the status will change to ERROR. The
	NO-REF status entry indicates that the External Mail program has no drive
	connection (either DrivesDirectPO or DrivesDynamic) to the specified
	NETWORK/POSTOFFICE.
	
	The MTD and YTD numbers are kept in XTN records. The XTN files are updated while
	messages are dispatched.
	
	While the F2 key functionality is displayed on the screen, the External Mail
	program continues to transfer messages.
	
	Additional query words: 3.20 3.20a 3.50
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:3.0,3.2,3.2a,3.5
	
	=============================================================================
	
