---
layout: page
title: "Q256216: Relational Wildcard Queries Return Unexpected Results"
permalink: kb/256/Q256216/
---

## Q256216: Relational Wildcard Queries Return Unexpected Results

	Article: Q256216
	Product(s): Internet Information Server
	Version(s): 2.0,2000,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	- Indexing Service, included with:
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use relational wildcard queries on text columns, you may get unexpected
	results. The following example demonstrates this using a document with a custom
	property value:
	
	  "Folders/Switzerland/Basel/CP6/CP6.1/Andromeda/XYZ"
	
	If you then query for this custom property value with wildcards at different
	positions in the string using a query page, at some positions, the wildcard
	query returns an empty result; however, in other positions, the resultset
	includes the document. For example, a relational wildcard query on the following
	does not return the document:
	
	  @Custom_Property Folders/Switzerland/B*
	
	However, a wildcard query on the following does return the document:
	
	  @Custom_Property Folders/Switzerland/Basel/CP6*
	
	RESOLUTION
	==========
	
	NOTE: This hotfix is only available for Site Server 3.0. For other products,
	refer to the "Workaround" section.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem. This fix may receive
	additional testing. Therefore, if you are not severely affected by this problem,
	Microsoft recommends that you wait for the next Site Server Service Pack that
	contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The typical support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of the fix should have the following file attributes or
	later:
	
	Date         Version      Size      Filename       Platform
	-----------------------------------------------------------
	12-21-2000   5.0.1781.3   526,576   ocifrmwk.dll   x86
	12-21-2000   5.0.1781.3   590,720   oquery.dll     x86
	
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. For these types of pattern matching queries, use regular expressions instead
	  of the relational queries. To do this, use the following syntax:
	
	  #Custom_Property Folders/Switzerland/B*
	
	
	  When you use regular expressions, Microsoft recommends setting
	  AllowEnumeration to TRUE. Please note that this may cause a performance
	  penalty on your queries.
	
	  For information on how to set AllowEnumaration, please refer to your Index
	  Server and Site Server documentation.
	
	2. Configure only the Neutral language resources. By default, properties are
	  indexed with English resources. If you use Neutral resources, the advanced
	  normalization behaves differently to the other language resources. As a
	  result, the relational wildcard query returns the expected result.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q246701 Configuring Index Server to Use the Neutral Word Breaker
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ100
	Version           : :2.0,2000,3.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
