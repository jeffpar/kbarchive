---
layout: page
title: "Q252494: XWEB: Attachments Cannot Be Opened in OWA 5.5 SP3"
permalink: /kb/252/Q252494/
---

## Q252494: XWEB: Attachments Cannot Be Opened in OWA 5.5 SP3

{% raw %}

	Article: Q252494
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After Microsoft Exchange Server 5.5 Service Pack 3 (SP3) is applied to your
	Microsoft Outlook Web Access (OWA) server, you cannot open many attachments,
	such as Microsoft Office documents, when you access OWA from a Microsoft
	Internet Explorer 5 browser. When you attempt to open an attachment, you are
	prompted for a username and password. What happens subsequently depends on
	whether you have administrator privileges on the OWA server:
	
	- If you have administrator privileges, you browser opens a blank window
	  instead of the attachment.
	
	- If you do not have administrator privileges, you keep getting prompted for
	  credentials until you cancel.
	
	However, you are able to open attachments with the following file extensions:
	*.gif, *.htm, *.html, *.jpg, *.txt and *.xbm.
	
	
	CAUSE
	=====
	
	Service Pack 3 modified the Webdata\<CountryAbbreviation>\Attach\Read.asp
	file so that Internet Explorer 5 can render certain file types that it considers
	to be "inline" (or in native format). However, a logic mistake causes all file
	types to be passed to Internet Explorer 5 as inline. Because Internet Explorer 5
	cannot process non-native formats inline, you receive the errors described in
	the "Symptoms" section.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Microsoft Exchange Server version 5.5
	service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: OWA
	
	+-----------------------+
	| File name | Date      | 
	+-----------------------+
	| Read.asp  | 3/22/2000 | 
	+-----------------------+
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server 5.5
	Service Pack 3.
	
	
	Additional query words: in-line *.doc *.xls *.mdb *.ppt IE IE5
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
