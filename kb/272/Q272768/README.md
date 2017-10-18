---
layout: page
title: "Q272768: Objects from Active Directory are Ignored When Running the AD MA"
permalink: kb/272/Q272768/
---

## Q272768: Objects from Active Directory are Ignored When Running the AD MA

	Article: Q272768
	Product(s): Microsoft Windows NT
	Version(s): 2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you import all of the objects from the Active Directory, certain
	organizational units, users, groups, or other directory objects are missing.
	When you set the logging level to 3, and run the affected Active Directory
	Management Agent (MA), the following information is recorded in the Operator's
	log:
	
	  DBG_03 091c 00/08/31 18:56:08.290 (AD-MA_dataFlowFromAdToMd) Object ignored
	  = CN=NCFour84,OU=test2,DC=mmstest,DC=com
	  DBG_03 091c 00/08/31 18:56:08.291 (AD-MA_dataFlowFromAdToMd) Object ignored
	  = CN=NCFour85,OU=test2,DC=mmstest,DC=com
	  DBG_03 091c 00/08/31 18:56:08.292 (AD-MA_dataFlowFromAdToMd) Object ignored
	  = CN=NCFour86,OU=test2,DC=mmstest,DC=com
	
	CAUSE
	=====
	
	All of the objects that are ignored have the proxiedObjectName attribute
	assigned. There is an attribute on the MA called
	msMMS-AdMaObjectImportExclusionAttrs that has a value of proxiedObjectName. The
	MA ignores any object that contains this attribute, and that is located in the
	Active Directory from which the MA is configured to take. The affected objects
	are not imported into Microsoft Metadirectory Services (MMS).
	
	Every object that has been moved from one domain to another has a
	proxiedObjectName attribute because this problem occurs when you move an object
	from one Windows 2000 domain to another by using a program such as the MoveTree
	utility, Active Directory Migration tool (ADMT), or Visual Basic, Scripting
	Edition (VBScript).
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps.
	
	Step 1: Search for the Attribute, and Verify Its Existence and Value
	--------------------------------------------------------------------
	
	1. Run the Ldp.exe tool.
	
	2. On the Connections menu, click Connect.
	
	3. In the Server box, type "<MMS Server Name>" (without the quotation
	  marks).
	
	4. In the Port box, type "<389>" (without the quotation marks).
	
	  The Lightweight Directory Access Protocol (LDAP) port may be set to a
	  different number. Be sure to check the Compass Client logon configuration.
	
	5. On the Connections menu, click Bind.
	
	6. In the User box, type "<MMS_application_machine_name@MMS_server_name>."
	  (without the quotation marks)
	
	7. In the Password box, type "<Administrator password>" (without the
	  quotation marks).
	
	8. Click to clear the Domain check box.
	
	9. On the View menu, click Tree, and then expand the tree to view:
	
	  DsaName=Server,ou=Applications,ou=test,dc=us,dc=microsoft,dc=com
	
	10. In the Ldp.exe tool, right-click an MA, and then click Search.
	
	11. Click Options, and be sure the options are set as follows:
	
	  Attributes: msMMS-AdMaObjectImportExclusionAttrs
	  Set: Base Dn: MA DN
	  Filter: (objectclass=*)
	  Scope: Base
	
	12. Click Run.
	
	You should see the following attribute and value on the resulting text:
	
	  msMMS-AdMaObjectImportExclusionAttrs: proxiedObjectName
	
	Step 2: Add the "msMMS-AdMaObjectImportExclusionAttrs" Attribute
	----------------------------------------------------------------
	
	1. Right-click an MA, and then click Modify.
	
	  Note that base DN is populated with the correct Management Agent Distinguished
	  Name (DN).
	
	2. In the Edit Entry Attribute box, type "msMMS-AdMaObjectImportExclusionAttrs"
	  (without the quotation marks).
	
	3. In the Edit Entry Values box, type "dummy" (without the quotation marks)
	
	  Assign a value that will never exist, or set a null value. Deleting the
	  attribute will generate the error listed at the end of this article.
	
	4. For Operation, click Replace.
	
	5. Click Enter, and then click Run.
	
	Step 3: Confirm the Success of the Update
	-----------------------------------------
	
	1. In Ldp.exe, right-click an MA, and then click Search.
	
	2. Click Options, and be sure that the options are set as follows:
	
	  Attributes: msMMS-AdMaObjectImportExclusionAttrs
	  Set: Base Dn: MA DN
	  Filter: (objectclass=*)
	  Scope: Base
	
	3. Click Run.
	
	The following errors will be generated after you run the Management Agent if you
	have deleted the msMMS-AdMaObjectImportExclusionAttrs attribute:
	
	  WRN_04 0660 00/09/02 13:25:44.007 (AD-MA_readMultiValAttrIntoSet) Couldn't
	  get attr 'msMMS-AdMaObjectImportExclusionAttrs' on record
	  [ma=AD1,DsaName=dirsynchex3,ou=MMS,dc=icl,dc=com] : 26003 -
	  PLUGAPI_RC_ATTRIBUTE_NOT_PRESENT
	  ERR_02 0660 00/09/02 13:25:44.008 (AD-MA_dataFlowFromAdToMd) Couldn't get list
	  of object exclusion attributes (msMMS-AdMaObjectImportExclusionAttrs) : 26003
	  - PLUGAPI_RC_ATTRIBUTE_NOT_PRESENT
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs Metadirectory
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS220
	Version           : :2.2
	Issue type        : kbprb
	
	=============================================================================
	
