---
layout: page
title: "Q189296: Inside DirectX Comments and Corrections"
permalink: /kb/189/Q189296/
---

## Q189296: Inside DirectX Comments and Corrections

{% raw %}

	Article: Q189296
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbdocerr kbAPI kbDirectPlay kbSDKPlatform kbGrpDSNet
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Inside DirectX ISBN 1-57231-696-9 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Inside DirectX," ISBN 1- 57231-696-9.
	
	Contents:
	
	- Table 14-2: Result type of DirectSoundEnumerate is HRESULT
	
	- Page 291: Clarification
	
	- Table 20-11: "Parameter" Column Heading Should Be "Method"
	
	- Page 331: Text Errors
	
	- Table 20-19: Text Correction
	
	- Table 20-22: Text Correction
	
	- Table 21-8: Text Error
	
	- Table 28-9: Text Error
	
	- Table 28-14: Comment
	
	- Figure 29-2: Screenshot Correction
	
	MORE INFORMATION
	================
	
	Table 14-2: Result type of DirectSoundEnumerate is HRESULT
	----------------------------------------------------------
	
	Page 207, Table 14-2:
	Change: "BOOL DirectSoundEnumerate"
	To: "HRESULT DirectSoundEnumerate"
	
	
	Page 291: Clarification
	-----------------------
	
	Page 291, paragraph 1, sentence 1:
	Change: "If you keep the DirectPlay tab open while a windowed DirectPlay
	application is running on the desktop..."
	
	To: "If you open the DirectPlay tab before starting a windowed DirectPlay
	application on the desktop..."
	
	
	Table 20-11: "Parameter" Column Heading Should Be "Method"
	----------------------------------------------------------
	
	Page 327, Table 20-11:
	Change: "Parameter"
	To: "Method"
	
	
	Page 331: Text Errors
	---------------------
	
	Page 331, paragraph 1, sentence 3:
	Change: "A DPSYS_ADDGROUPTOGROUP message is sent to the other players."
	To: "A DPSYS_ADDGROUPTOGROUP message is sent to all players."
	
	Page 331, paragraph 3, sentence 4:
	Change: "A DPSYS_DELETEGROUPFROMGROUP message is sent to all other players."
	To: "A DPSYS_DELETEGROUPFROMGROUP message is sent to all players."
	
	
	Table 20-19: Text Correction
	----------------------------
	
	Page 333, Table 20-19:
	Change: "Either NULL to enumerate players..."
	To: "Either NULL to enumerate groups..."
	
	
	Table 20-22: Text Correction
	----------------------------
	
	Page 334, Table 20-22:
	Change: "Control flags, as summarized in Table 20-20."
	To: "Control flags, as summarized in Table 20-6."
	
	
	Table 20-30: Clarification
	--------------------------
	
	Page 347, Table 20-30:
	Change: "This session is the new host."
	To: "The local DirectPlay object is the new host."
	
	
	Table 21-8: Text Error
	----------------------
	
	Page 372, Table 21-8:
	Change: "The address of a pointer to be initialized to a new IDirectPlayA or
	IDirectPlay2A interface."
	To: "The address of a pointer to be initialized to a new IDirectPlay2 or
	IDirectPlay2A interface."
	
	
	Table 28-9: Text Error
	----------------------
	
	Page 503, Table 28-9:
	Change: "INT WINAPI DirectXSetupSetCallBack"
	To: "int WINAPI DirectXSetupSetCallBack"
	
	
	Table 28-14: Comment
	--------------------
	
	Page 507, Table 28-14:
	Change: "The driver being upgraded is currently in use."
	To: "The driver being upgraded is currently in use. DirectXSetup can upgrade this
	driver anyway but will need a system restart after installation is complete."
	
	
	Figure 29-2: Screenshot Correction
	----------------------------------
	
	Page 516, Figure 29-2:
	Remove the "Format" command from the context menu.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of the book, it may already
	contain the above corrections.
	
	Additional query words: ms_press dx 5.0 50
	
	======================================================================
	Keywords          : kbnetwork kbdocerr kbAPI kbDirectPlay kbSDKPlatform kbGrpDSNet 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
