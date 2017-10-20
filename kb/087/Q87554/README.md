---
layout: page
title: "Q87554: BUG: CArchiveException for Read-only and Write-only Files"
permalink: /kb/087/Q87554/
---

## Q87554: BUG: CArchiveException for Read-only and Write-only Files

{% raw %}

	Article: Q87554
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbnokeyword kbFileIO kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbGrp
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows 
	   - Microsoft Visual C++ 32-bit Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The CArchiveExceptions for read-only and write-only archives are not thrown by
	the Microsoft Foundation Class Library. This condition can be caught by checking
	for an access denied CFileException.
	
	CAUSE
	=====
	
	This is an oversight of the MFC libraries. The CArchive class does not utilize a
	try/catch block in its member functions that actually perform the serialization.
	Thus, a CArchiveException will never be thrown for read-only and write-only
	archives.
	
	RESOLUTION
	==========
	
	To test for this condition, look for a CFileException with an m_cause value of
	CFileException::accessDenied.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of the Microsoft
	Foundation Classes listed above. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The CArchiveException class is used to handle exceptions that happen when using
	the CArchive class. The cause of the CArchiveException can be found by checking
	the m_cause data member of CArchiveException. Two of the values listed for
	m_cause are CArchiveException::readOnly and CArchiveException::writeOnly. For
	more information, refer to the Visual C++ Books Online topics for CArchive and
	CArchiveException.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbFileIO kbMFC kbVC100bug kbVC150bug kbVC200bug kbVC400bug kbVC410bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
