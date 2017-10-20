---
layout: page
title: "Q263078: DB5_setSingleValuedAttribute() Returns &quot;Invalid Encoding (0)&quot;"
permalink: /kb/263/Q263078/
---

## Q263078: DB5_setSingleValuedAttribute() Returns &quot;Invalid Encoding (0)&quot;

{% raw %}

	Article: Q263078
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool metadirectory MMS
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following warning message may appear in the Genlogs file:
	
	  WRN_00 01a2 00/03/15 16:54:10.686 (DB5_setSingleValuedAttribute) Invalid
	  encoding (0) specified for attribute <XXXXXXX>, dn (null).
	
	CAUSE
	=====
	
	At some point in the past, the database contained an error (probably a syntactic
	error) in the schema definitions as defined in either the Db5attr.oid or
	Custom.oid file. An indeterminate number of records that contain these specific,
	malformed attributes were written into the directory. Subsequently, the server
	that is running Microsoft Metadirectory Services (in builds after build 261)
	caught these errors when the records were being rewritten, and performed the
	lookupFromOID process to determine the correct attribute encoding.
	
	RESOLUTION
	==========
	
	The warning message means that schema definition errors are being corrected as
	records are being rewritten. As a precaution, run the Chkoids.exe program to
	verify that the directory-based object identification (OID) definitions are
	correct.
	
	
	MORE INFORMATION
	================
	
	In Microsoft Metadirectory Services (MMS) 2.2, OID definitions are inspected and
	verified as they are accepted into the directory; incomplete or illegal
	definitions are immediately rejected. This enhanced checking should prevent
	"Invalid encoding" messages from appearing in MMS 2.2.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool metadirectory MMS 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
