---
layout: page
title: "Q255939: MMS DB5cfg File Displays Incorrect Build Number"
permalink: /kb/255/Q255939/
---

## Q255939: MMS DB5cfg File Displays Incorrect Build Number

	Article: Q255939
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 15-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Metadirectory Services (MMS) installer marks an invalid build
	number in the Zoomserv\Data\Config\Db5cfg file. For example:
	
	  ##########################################
	  # FILE: db5cfg #
	  # DATABASE CONFIGURATION FILE #
	  ##########################################
	  #
	  context_prefix dc=testcorp,dc=com
	  db5_local_dsa_name DsaName=meta,ou=Applications,dc=testcorp,dc=com
	  db5_local_mta_name MtaName=MtaName,ou=Applications,dc=testcorp,dc=com
	  db5_local_x400_domain_name p=yourPRMD/a=yourADMD/c=yourCo
	  db5_local_x400_msg_id_sig uniqueID
	  #db5_rel_db_dir path_to_directory
	  #db5_asn_db_dir path_to_directory
	  #db5_hash_db_dir path_to_directory
	  #db5_tran_db_dir path_to_directory
	  #db5_fileattr_dir path_to_directory
	  db5_max_tran_file_size 64000000
	  maximum_adminpoints_cached 360
	  maximum_adminlinks_cached 4096
	  hostname meta.testcorp.com
	  Installed 2.1 Build 0804.000 01/21/2000 09:46:39
	
	RESOLUTION
	==========
	
	To work around this behavior and correctly identify the build number of your MMS
	server:
	
	1. Double-click the MMS Console icon on the right side of the taskbar.
	
	2. On the Help menu, click About. The build number is displayed in the dialog
	  box that appears.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
