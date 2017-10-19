---
layout: page
title: "Q270064: Attributes Do Not Flow When Case Sensitivity Changes"
permalink: /kb/270/Q270064/
---

## Q270064: Attributes Do Not Flow When Case Sensitivity Changes

	Article: Q270064
	Product(s): Microsoft Windows NT
	Version(s): 2.1,2.2
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, versions 2.1, 2.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you configure "attribute flow" to flow attributes, and you change the case
	sensitivity of an attribute, the attributes do not flow
	
	CAUSE
	=====
	
	This behavior occurs because the attribute zcDsAttributeFlowIsCaseExact is not
	set to True on the Management Agent. You cannot change this setting on the
	Management Agent.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. Click Start, point to Programs, point to "Microsoft Metadirectory Service",
	  and then click "MMS Forms Designer".
	
	2. On the File menu, click Open, and then click Form Directory.
	
	3. Click the following form set:
	
	  MA=MAName
	  Dsaname=DSAObject
	  ou=applications
	  dc=domainname
	  dc=com
	
	4. Click Open.
	
	5. Click macfgoptions1a.frm from Files List.
	
	6. Click Edit.
	
	7. From the Tools dialog box, click Check box and drag it to the location where
	  you want it on the form.
	
	8. In caption box, type "Flow case" (without the quotation marks).
	
	9. In X.500 Attribute, type "zcDsAttributeFlowIsCaseExact" (without the
	  quotation marks).
	
	10. In Matching Value, type "True" (without the quotation marks).
	
	11. Click to select the "Default radio button" check box.
	
	12. On the Formset menu, click Save.
	
	It is recommended that you save the templates to the working directory after
	making this case to the formset on the directory.
	
	For additional information about recording templates, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q250479 Recording Management Agent Templates in MMS
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbMMSSearch kbMMS210 kbMMS220
	Version           : :2.1,2.2
	Issue type        : kbprb
	
	=============================================================================
	
