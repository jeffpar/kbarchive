---
layout: page
title: "Q298455: SMS: Collection Evaluator Can't Update Collections on Child Site"
permalink: /kb/298/Q298455/
---

## Q298455: SMS: Collection Evaluator Can't Update Collections on Child Site

{% raw %}

	Article: Q298455
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbsms200 kbCollections
	Last Modified: 25-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Collections at a central site that are based on a query may not be correctly
	replicated down to a child primary site if the query criteria does not exist on
	the child site. In this situation, you may receive the following error messages
	in the Colleval.log file:
	
	  Preparing to refresh collection DET00028
	  SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server
	  SQL Msg #208> Invalid object name 'User_Information_DATA'.
	  CCollectionSource_SQL::RefreshResults - Err in SQL cmd insert into
	  Temp__RES_COLL_DET00028 (MachineID,ArchitectureKey,Name,SMSID,Domain
	  ,IsClient) select all SMS_R_System.ItemKey, SMS_R_System.DiscArchKey,
	  SMS_R_System.Name0, SMS_R_System.SMS_Unique_Identifier0,
	  SMS_R_System.Resource_Domain_OR_Workgr0, SMS_R_System.Client0 from
	  System_DISC AS SMS_R_System INNER JOIN User_Information_DATA AS
	  __RATION_USERINFORMATION_1_00 ON __RATION_USERINFORMATION_1_00.MachineID =
	  SMS_R_System.ItemKey where UPPER(__RATION_USERINFORMATION_1_00.Department00)
	  in (UPPER("092"),UPPER("091"),UPPER("094"))
	  $$<SMS_COLLECTION_EVALUATOR><Tue Apr 10 11:25:21.218 2001 Eastern
	  Standard Time><thread=2032 (0x7F0)>
	  CStatusReporter::Report() ERROR: Caller passed NULL for pSM.
	  Could not refresh collection DET00028. Will retry later.
	
	CAUSE
	=====
	
	This behavior occurs if the NOIDMIF file's database class is not defined on the
	child site. For example, assume the following hierarchy:
	
	              Central
	              /     \ 
	             /       \ 
	            /         \ 
	         Site A     Site B
	
	If Site A has implemented a NOIDMIF file, classes are created for both Site A and
	the Central site. However, classes are not created for Site B, because inventory
	only moves up the hierarchy. Therefore, when the Collection Evaluator on Site B
	tries to evaluate a query based on these classes, the operation fails.
	
	WORKAROUND
	==========
	
	To resolve this issue, put a copy of the NOIDMIF file that has been processed on
	the parent site in the %windir%\MS\SMS\NOIDMIFS folder on a client in the child
	site (for example, Site B, as described in the "Cause" section of this article).
	To force a hardware inventory on the client, open the Systems Management tool in
	Control Panel, click the Components tab, click Hardware Inventory, and then
	click Start Component. A hardware inventory cycle starts on the client.
	
	When the standard hardware processing cycle is complete, the NOIDMIF file is
	appended to the hardware inventory and processed by the SMS Inventory Data
	Loader on the child site. Classes in the inventory that do not exist in the
	database are created. Collections can now be correctly evaluated.
	
	MORE INFORMATION
	================
	
	When collections are replicated down to a child site, the membership rules are
	replicated as a portion of the replicated data. If membership depends on a class
	that does not exist at the child site, you may receive the error messages
	described in the "Symptoms" section of this article.
	
	For additional information about collection replication to child sites, see
	chapter 17 of the Systems Management Server 2.0 Resource Guide.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbsms200 kbCollections 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
