---
layout: page
title: "Q164852: XCON: Attachments from HP OpenDesk May Not Open"
permalink: /kb/164/Q164852/
---

## Q164852: XCON: Attachments from HP OpenDesk May Not Open

{% raw %}

	Article: Q164852
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send mail with an attachment from Hewlett Packard (HP) OpenDesk mail to a
	computer running Microsoft Exchange Server through the X.400 connector (1984),
	the Microsoft Exchange Server recipient (on the same server as the X.400
	connector) receives a message with an attachment of the correct name. However,
	when the user clicks the attachment to open it, he or she may get an error
	message reporting "This file does not have a program associated with it." The
	title bar of the message shows that the file it is attempting to open is
	c:\Temp\Att.dat. The error occurs even if you have an association for the file
	extension of the attachment.
	
	CAUSE
	=====
	
	HP OpenDesk message is malformed. It does not include the file name in the
	"pathname" attribute, as specified by the Electronic Messaging Association (see
	the MORE INFORMATION section of this article). The following is the incoming
	message in ASN.1 format:
	
	ASN.1 Parser Utility
	Starting at Node 0ftrp [ id = 2879 ]
	  3080
	  A180     : 0cnty : ContentsType
	  A080     : 0doct : DocumentType
	  0605     : 0dctn : DocumentTypeName             :  OBJECT ID:
	  "0x28C27B0503"
	  0000
	
	  0000
	  A280     : 0envr : EnvironmentParameter
	  A080     : 0aprf : ApplicationReference
	  8008     : 0regi : RegisteredIdentifier         :  OBJECT ID:
	  "0x2A864886F7140403"
	  0000
	
	  A380     : 0usvs : DescriptiveIdentifier
	  190C     : 0usrv : GraphicString
	  ="0x474E53494E56454E2E584C53"
	  0000
	
	  0000
	  A480     : 0flat : FileAttributes
	  AD80     : 0objs : ObjectSize
	  8102     : 0actv : ActualValue                INTEGER 0x6800
	  0000
	
	  0000
	  0000
	
	No PathName is present, so the Microsoft Exchange Server MTA cannot apply a
	proper attachment name for display. The fix supplied by Microsoft (see the
	STATUS section of this article) treats the user-visible string as the file name
	(in the example above, the user-visible string is the "DescriptiveIdentifier
	GraphicString" attribute).
	
	WORKAROUND
	==========
	
	To work around this problem, save the attachments as files before opening them.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0 and 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 4.0 and 5.0 U.S. Service Packs. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The standards reference for File Transfer Body Part (FTBP) usage is from the
	Electronic Messaging Association (EMA), Message Attachment Work Group File
	Transfer Body Part Feasibility Project Guide, v.1.5.2, June 1996.
	
	The following is an excerpt from section 5, File Transfer Body Part 15 Profile,
	describing where the filename is supposed to go :
	
	                              O  R    Notes
	  File-Transfer-Body-Part
	  FileTransferParameters
	  Environment
	  user-visible-string            R  M    note 3
	  File-Attributes
	  pathname                   R  M    note 4
	
	  O - Origination, R - Reception
	  R - recommended, M - mandatory
	
	  Notes
	
	  3. User-Visible-String
	  This element should be used to convey any additional distinguishing
	  information that might be of use to the receiver, eg. for presentation to a
	  user or in cases where the application-reference is not recognized by the
	  receiving system.
	
	  4. Pathname
	  If generated, the incomplete-pathname should be used. The SEQUENCE should only
	  consist of a single GRAPHIC-STRING element containing the target
	  file/attachment name without any preceding path information.
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
