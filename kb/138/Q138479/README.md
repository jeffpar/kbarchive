---
layout: page
title: "Q138479: INFO: Required Rights for SourceSafe Commands"
permalink: /kb/138/Q138479/
---

## Q138479: INFO: Required Rights for SourceSafe Commands

	Article: Q138479
	Product(s): Microsoft SourceSafe
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual SourceSafe has an internal security system that may be enabled by the
	Visual SourceSafe Administrator. This security system will enable or disable
	commands to users based on the current rights they hold.
	
	MORE INFORMATION
	================
	
	The following list contains the command and the required rights for the user to
	execute that command from the Visual SourceSafe Explorer or the command line.
	
	Here is a list of the abbreviated rights:
	
	  R - Read
	  C - Check out / Check in
	  A - Add / Rename / Delete
	  D - Destroy
	
	  Command                 R C A D     Total Rights
	  ------------------------------------------------
	  Add                     * * *       RCA
	  Branch                  * * *       RCA
	  Checkin                 * *         RC
	  Checkout                * *         RC
	  Comment                 * *         RC
	  CP                      *           R
	  Create                  * * *       RCA
	  Destroy                 * * * *     RCAD
	  Diff                    *           R
	  Dir                     *           R
	  FileType                * * *       RCA
	  FilesReport             *           R
	  Find                    *           R
	  Get                     *           R
	  Help                    none
	  History                 *           R
	  Label                   * * *       RCA
	  Links                   *           R
	  Locate                  *           R
	  Merge                   * *         RC
	  Move                    * * *       RCAD
	  Password                none
	  Paths                   *           R
	  Pin                     * * *       RCA
	  Project                 *           R
	  Properties              * * * *     RCAD
	  Purge                   * * * *     RCAD
	  Recover                 * * *       RCA
	  Remove                  * * *       RCA
	  Rename                  * * *       RCA
	  Rollback                * * * *     RCAD
	  Search                  *           R
	  Share                   * * *       RCA
	  Set Working Directory   *           R
	  Sort                    *           R
	  Status                  *           R
	  Undo Checkout           * *         RC
	  Unpin                   * * *       RCA
	  View                    *           R
	  WhoAmI                  none
	
	
	The following commands are new to Visual SourceSafe version 5.0:
	
	  Cloak                   *           R
	  Check Hyperlinks        *           R
	  Create Sitemap          *           R
	  Decloak                 *           R
	  Deploy                  *           R
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : :4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
