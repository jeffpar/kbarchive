---
layout: page
title: "Q175949: INFO: List of Values for Action Parameter of Validate Event"
permalink: /kb/175/Q175949/
---

## Q175949: INFO: List of Values for Action Parameter of Validate Event

{% raw %}

	Article: Q175949
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is a complete list of all possible settings for the action
	parameter of the Validate Event for the Microsoft Data Control. The first 12 are
	documented in the online Help and the Microsoft Visual Basic Language Reference
	under the description of the Validate event.
	
	MORE INFORMATION
	================
	
	The action parameter of the Validate Event of the Microsoft Data Control is
	populated with the notification that is sent to the control from the Data Access
	Objects (DAO). The action parameter is documented in Visual Basic to have the
	following valid settings:
	
	vbDataActionCancel       0   Cancel the operation when the Sub exits.
	vbDataActionMoveFirst    1   MoveFirst method.
	vbDataActionMovePrevious 2   MovePrevious method.
	vbDataActionMoveNext     3   MoveNext method.
	vbDataActionMoveLast     4   MoveLast method.
	vbDataActionAddNew       5   AddNew method.
	vbDataActionUpdate       6   Update operation (not UpdateRecord).
	vbDataActionDelete       7   Delete method.
	vbDataActionFind         8   Find method.
	vbDataActionBookmark     9   The Bookmark property has been set.
	vbDataActionClose       10   The Close method.
	vbDataActionUnload      11   The form is being unloaded.
	
	There are 22 additional possible notifications from DAO that were not documented
	because they should not normally occur in a Visual Basic application. Most of
	these notifications are either not passed on to the action parameter of the
	Validate Event and simply ignored, will cause an error to be raised, or are
	mapped to one of the documented settings. Under certain conditions, it is
	possible that one of the following values is passed to the action parameter of
	the Validate Event. The following is a list of those values:
	
	VALUE           DESCRIPTION
	12              Rollback
	13              Data Read
	14              Data Save
	15              Move Relative
	16              Index Changed
	17              Field Updated
	18              Row Fixup
	19              Refresh All Rows
	20              Refresh Bookmark
	21              Refresh Condition
	22              Requery Parameters
	23              Requery Definition
	24              Schema Change
	25              Order or Rows Change
	26              Row Hidden
	27              Seek
	28              PercentPosition Move
	29              AbsolutePosition Move
	30              CancelUpdate
	31              Cascading Update
	32              Cascading Delete
	33              Edit
	
	NOTE: Because these settings should not normally be generated, they should not be
	relied upon or used. This article is for documentation and debugging purposes
	only. Any value that is not documented in the online Help for bound controls and
	is subject to change.
	
	REFERENCES
	==========
	
	Further information on these values and other data binding issues can be found
	in the Data Binding SDK documentation available on www.microsoft.com.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Troy
	Cambra, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400 kbDAO
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
