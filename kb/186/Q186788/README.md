---
layout: page
title: "Q186788: XWEB: Cannot View Attachments in OWA on IIS 4.0 Computer"
permalink: /kb/186/Q186788/
---

## Q186788: XWEB: Cannot View Attachments in OWA on IIS 4.0 Computer

{% raw %}

	Article: Q186788
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Internet Information Server 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft Outlook Web Access to view a message that contains an
	attachment on a Microsoft Exchange Server computer that is running Microsoft
	Internet Information Server (IIS) 4.0, you may be unable to open the attachment.
	Microsoft Internet Explorer is able to display the contents of the attachment,
	but other Internet browsers may not be able to do so.
	
	
	CAUSE
	=====
	
	When you view a message that contains an attachment, Outlook Web Access uses the
	IIS Multipurpose Internet Mail Extensions (MIME) table to determine which MIME
	type is associated with the file's extension. This allows your Internet browser
	to display the contents of the attachment.
	
	In IIS 3.0, the MIME table is located in the registry. The MIME table is also
	located in the registry in IIS 4.0, but it is located under a different registry
	key. This prevents Outlook Web Access from determining which MIME type is
	associated with a given extension. Because it cannot obtain the correct MIME
	type, Outlook Web Access assumes that the MIME type is
	"application/octet-stream." Some Internet browsers can display the contents of
	the attachment under these circumstances, but others cannot.
	
	WORKAROUND
	==========
	
	To work around this problem, use one of the following methods:
	
	- Save the attachment to your hard disk, and then open the file from your hard
	  disk.
	
	- If the file type associated with the attachment exists, modify the file type
	  so that the appropriate MIME type is associated with it. To do so, follow
	  these steps:
	
	  a. In My Computer or Windows NT Explorer, click Folder Options on the View
	     menu, and then click the File Types tab.
	
	  b. Click the appropriate file type in the list of registered file types, and
	     then click Edit.
	
	  c. Verify that the appropriate MIME type is selected in the Content Type
	     (MIME) box, click OK, and then click OK again.
	
	- If the file type associated with the attachment does not exist, create it. To
	  do so, follow these steps:
	
	  a. In My Computer or Windows NT Explorer, click Folder Options on the View
	     menu, and then click the File Types tab.
	
	  b. Click New Type.
	
	  c. Type a description for the file type in the Description Of Type box, type
	     the file's extension is the Associated Extension box, and then select the
	     appropriate MIME type in the Content Type (MIME) box.
	
	  d. Click New, type "open" (without quotation marks) in the Action box, type
	     the full path and file name of the program used to open the file in the
	     Application Used To Perform Action box, click OK, click OK again, and then
	     click OK again. Note that you can click Browse to locate the program
	     instead of typing the full path and file name manually.
	
	MORE INFORMATION
	================
	
	In IIS 3.0, the MIME table is located under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\Inetinfo
	  \Parameters\MIMEMap
	
	NOTE: The above registry key is one path; it has been wrapped for readability.
	
	IIS 4.0 uses the MIME table located under the following registry key:
	
	  HKEY_CLASSES_ROOT\MIME\Database\Content Type
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Outlook Web Access
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: owa iis k2
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbiisSearch kbiis400 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5; WINNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
