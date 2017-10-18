---
layout: page
title: "Q173252: FIX: CArchive::GetObjectSchema Returns Incorrect Schema"
permalink: kb/173/Q173252/
---

## Q173252: FIX: CArchive::GetObjectSchema Returns Incorrect Schema

	Article: Q173252
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS NT:4.2,5.0
	Operating System(s): 
	Keyword(s): kbVC420bug kbVC500bug kbVS97sp3fix
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	CArchive::GetObjectSchema returns the schema of the object loading the
	serialized information rather than the schema of the object being loaded. This
	occurs only when an object with a schema greater than 0 loads an object with a
	schema equal to 0 and the object being loaded is not the first of this type.
	
	CAUSE
	=====
	
	When the first object of a type that has a schema of 0 is loaded, the value of
	the CArchive member, m_nObjectSchema, is set to a value of 0. When further
	objects of the same type are loaded, m_nObjectSchema is set to the schema of the
	object loading the serialized information.
	
	This behavior is due to the way CArchive::ReadClass determines the schema of a
	type that has already been stored. This is done in the following code located
	toward the end of CArchive::ReadClass:
	
	     // determine schema stored against objects of this type
	     void* pTemp;
	     if (m_pSchemaMap != NULL &&
	        (pTemp = m_pSchemaMap->GetValueAt(pClassRef)) != NULL)
	        nSchema = (UINT)pTemp;
	     else
	     nSchema = pClassRef->m_wSchema & ~VERSIONABLE_SCHEMA;
	
	When the schema of a type that has already been loaded is 0 the value returned
	from GetValueAt is 0 and the else part of the if statement is executed. This
	sets the value of the schema for the object being loaded as the schema of the
	existing object.
	
	RESOLUTION
	==========
	
	There are two ways to work around this issue:
	
	- Do not use a schema of 0 to serialize object information. This is the
	  simplest solution but may not be practical if objects of schema 0 must be
	  maintained.
	
	-or-
	
	- Set a flag when you load objects of schema 0. This flag should be considered
	  when testing for schema number when using Archive::GetObjectSchema. The time
	  to set this flag is when the first object with schema 0 is being loaded.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVC420bug kbVC500bug kbVS97sp3fix 
	Technology        : kbAudDeveloper kbMFC
	Version           : WINDOWS NT:4.2,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
