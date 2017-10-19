---
layout: page
title: "Q229973: SMS: SINV Does Not Report Last Accessed Date or Modified Date"
permalink: /kb/229/Q229973/
---

## Q229973: SMS: SINV Does Not Report Last Accessed Date or Modified Date

	Article: Q229973
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbInventory kbsmsUtil
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Software inventory in Systems Management Server 2.0 does not report the Last
	Accessed Date or Modified Date attributes of the files being inventoried. You
	can use the Swinv.exe command-line tool to inventory the files you specify for
	file attributes, including the Last Accessed Date, Creation Date, and Modified
	Date attributes, and to report its information as a .csv file or a .mif file.
	
	This tool works in Systems Management Server versions 1.2 and 2.0.
	
	RESOLUTION
	==========
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date      Time         Version       Size    File name   Platform
	  -----------------------------------------------------------------
	
	  11/4/99   2:54pm   2.00.1250.6      36,864   Swinv.exe   i386
	  11/4/99   3:01pm   2.00.1250.6      44,032   Swinv.exe   Alpha
	
	The previous version of this fix had the following file attributes:
	
	  Date      Time         Version       Size    File name   Platform
	  -----------------------------------------------------------------
	
	  2/19/99   6:16pm   2.00.1250.0000   36,864   Swinv.exe   i386
	  2/19/99   6:16pm   2.00.1250.0000   33,280   Swinv.exe   Alpha
	
	NOTE: Due to file dependencies, the most recent hotfix or feature that contains
	the above files may also contain additional files.
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server 2.0.
	
	MORE INFORMATION
	================
	
	If you have previously used the old version of the Swinv.exe tool, then you must
	first delete the AuditedSoftware and InventoryFiles group classes using the
	DELGRP utility from the Windows Resource Kit. Then use SQL Enterprise Manager to
	drop the following stored procedures:
	
	  pInventory_Files_DATA
	  dInventory_Files_DATA
	  pAudited_Software_DATA
	  dAudited_Software_DATA
	
	NOTE: After you delete the SQL stored procedures, stop and restart the SMS
	Executive service. These stored procedures are recreated when you load the first
	new Swinv noidmif into the database.
	
	NOTE: If this is not done, the dataloader does not load into the database mifs
	produced by the new version of the Swinv.exe tool.
	
	The syntax for Swinv.exe is
	
	  swinv [/format:{csv|idmif|noidmif}] [/detail:{both|software|file}] [/drive:{a-z}*] 
	  [/path:[path] [/yield:<delay>] [/output:drive:\[path\] [file].ext | *
	
	where:
	
	- /format specifies the type of output created: csv, idmif, or noidmif. It
	  defaults to csv if no option is specified.
	
	  NOTE: On Systems Management Server 2.0 clients, the IDMIF option is not
	  currently supported in this tool.
	
	- /detail specifies the type of information retrieved by SWINV. "Software"
	  returns the following information from the file headers:
	
	   - Company Name
	
	   - Product Name
	
	   - Product Version
	
	  "File" returns the following file attributes:
	
	   - File Name
	
	   - File Size
	
	   - File Version
	
	   - Company Name
	
	   - Product Name
	
	   - Product Version
	
	   - File Location
	
	   - Accessed
	
	   - Created
	
	   - Modified
	
	  "Both" combines the two. SWINV defaults to "both" if no option is specified.
	
	  NOTE: There is no method of specifying particular attributes.
	
	- /drive specifies the disk that is searched. You can specify a single drive
	  letter and SWINV scans only that drive. If a drive letter is not specified,
	  SWINV defaults to scan all local hard disks.
	
	- /path specifies a directory to start searching. SWINV searches the specified
	  folder and all its subfolders. If /drive is not specified and multiple drives
	  have directories with that name, SWINV scans them all. If /path is not
	  specified, SWINV defaults to a root folder search path.
	
	- /yield causes SWINV to pause for the specified number of milliseconds every
	  time it changes a directory during its search. This allows it to yield
	  processor time to another running application. If /yield is not specified,
	  SWINV defaults to zero milliseconds, which gives the maximum scan rate.
	
	- /output writes the output to the path specified. It defaults to the Systems
	  Management Server idmif or noidmif path (specified in c:\Sms.ini or
	  Smscfg.ini); otherwise c:\Swinv.
	
	NOTES:
	
	- When used, the output path must be a folder name only. When the format is ID
	  or NOID MIF, /output must not be used.
	
	- The final parameter is required and is a filter that tells SWINV what files
	  to look for. It takes the form:
	
	     .ext (not *.ext)  -- all files with the specified extension
	     Filename.ext      -- specific file name
	
	
	The following sample usage provides some examples for how to use SWINV:
	
	  
	  C:\>swinv /format:idmif /detail:software .exe .com
	  C:\>swinv /drive:m /output:c:\nwsys .exe .com .dll .ocx
	  C:\>swinv /format:noidmif /path:"My Documents" .doc
	  C:\>swinv /format:noidmif doom.exe
	
	SWINV is completely silent unless the /? switch is used. It logs messages to the
	Swinv.log file, located in the root of drive C.
	
	After running SWINV and creating a noidmif file, in order for the information to
	be reported to the Systems Management Server database, hardware inventory (not
	software inventory) must run to pick up the noidmif file.
	
	After the noidmif has been processed, you can view the data by using Resource
	Explorer in Systems Management Server 2.0 or by opening Machine Properties in
	Systems Management Server 1.2. The file attribute information (/detail:file) is
	reported in the Inventory Files Group under Hardware Inventory. The file header
	information (/detail:software) is reported in the Audited Software Group also
	under Hardware Inventory.
	
	Additional query words: prodsms sinv
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbInventory kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
