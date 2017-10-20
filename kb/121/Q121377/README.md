---
layout: page
title: "Q121377: PC WRmt: Remote POL Not Updated After New Addr. List Download"
permalink: /kb/121/Q121377/
---

## Q121377: PC WRmt: Remote POL Not Updated After New Addr. List Download

{% raw %}

	Article: Q121377
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The postoffice address list (POL) is not updated after a new address list has
	been downloaded.
	
	CAUSE
	=====
	
	There are three possible causes of this problem:
	
	- The user is defined as having a custom directory view rather than the default
	  view
	
	- The RNETWORK.GLB file is not updated properly on the postoffice
	
	- The ADMIN.NME file on the client is not updating properly
	
	RESOLUTION
	==========
	
	If Custom Views Are Being Used
	------------------------------
	
	If the user has been defined on the postoffice as using custom directory views,
	the default RNETWORK.GLB file that is generated every day at 4 A.M. will not
	update this particular client's address book. For changes to be reflected in a
	custom view, you must use the Mail Administrator (ADMIN.EXE) program to update
	the custom view, as follows:
	
	1. Select Remote, Views, Modify. Select the first view and press ENTER.
	
	2. Press ESC, then press ENTER when the Enter View Name dialog box is displayed.
	
	3. Press ENTER one more time to select Yes in response to the suggestion,
	  "Modify Remote Directory View."
	
	This will update the custom view. Users will see the update after they download
	the address book.
	
	Repeat these steps for all views on the system that contain the changes.
	
	If RNETWORK.GLB Is Not Updated
	------------------------------
	
	The RNETWORK.GLB file is updated from the ADMIN.NME file every day at 4 A.M.
	Check the RNETWORK.GLB file time and date. If the file is not dated and stamped
	at 4 A.M., you can safely assume that it was not updated. If this is the case,
	perform the following steps to regenerate the RNETWORK.GLB file:
	
	1. Go to the GLB subdirectory on the postoffice where the RNETWORK.GLB file has
	  not been updated. Rename the RNETWORK.GLB file to RNETWORK.OLD.
	
	2. Run the Mail Administrator program on the same postoffice. Select Remote,
	  Regenerate, Yes. The RNETWORK.GLB will be regenerated.
	
	3. Go to a client and again download the postoffice list.
	
	NOTE: If this solves the problem ensure that you are using the latest versions of
	ADMIN.EXE (version 3.2.12 or later) and EXTERNAL.EXE (version 3.2.13 or later).
	
	If ADMIN.NME Possibly Corrupted
	-------------------------------
	
	If you are confident that the RNETWORK.GLB file is being properly updated, the
	problem may lie with the client. On the client computer, go to the
	WINDOWS/MSMAIL/MSRMT/NME subdirectory and rename the ADMIN.NME file to
	ADMIN.OLD. Download the address list again.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	

{% endraw %}
