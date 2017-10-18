---
layout: page
title: "Q279755: INFO: Visual Basic and Arithmetic Precision"
permalink: kb/279/Q279755/
---

## Q279755: INFO: Visual Basic and Arithmetic Precision

	Article: Q279755
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbCompiler KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Visual Basic program runs a statement such as 1.26 - 1.25, the answer is
	not 0.01, but 0.00999999 because of the complex way in which numbers are
	represented in a computer. This article describes how Visual Basic handles
	arithmetic precision.
	
	MORE INFORMATION
	================
	
	When people count, they use the decimal numbering system, or base 10. Computers
	count by using the binary numbering system, or base 2. The binary system is
	perfect for a computer because it uses thousands of tiny electrical switches to
	store information internally. Each switch can have two states; a high electrical
	voltage or a low electrical voltage: essentially, on/off, or one/zero. Each
	switch is called a bit. By stringing these bits together, people can store
	numbers that are represented by a binary numbering system. Because the computer
	is always counting in binary and people are always counting in decimal, the
	computer is always converting from one numbering system to the other. A few
	simple decimal to binary number conversions are:
	
	  1 Decimal = 1 Binary
	  2 Decimal = 10 Binary
	  3 Decimal = 11 Binary
	  4 Decimal = 100 Binary
	  10 Decimal = 1010 Binary
	
	So far, computer switches have only been representing the simplest of numbers
	like 1, 2, 3, and so forth. These numbers are often called "natural numbers" or
	"whole numbers." When you add, subtract, or multiply a whole number, the answer
	is a whole number. However, if you divide two whole numbers, you do not always
	get a whole number; you can get a fraction, also known as a "floating-point
	number." Sometimes these fractions do strange things. For example: 2317/990 =
	2.34040404040.... with the 40 repeating over and over. These positive and
	negative integers and fractions, and the number 0, comprise the "rational
	number" system. A more formal definition would be: A rational number is any
	number that can be written as a fraction where the numerator and denominator are
	both integers.
	
	Because there is no fractional part to an integer, its binary representation is
	much simpler than it is for a floating-point value. Every base 10 integer can be
	exactly converted to a base 2 integer. All that the computer needs is enough
	bits. However, this is not true for fractional numbers. For example, the base 10
	fraction 1/100 can be represented as the decimal number 0.01. However, when the
	same number is converted to binary, it becomes a repeating binary number. The
	reason that 1/100 cannot be represented exactly in base 2 is similar to the way
	that 1/3 cannot be represented exactly in base 10; only fractional base 10
	numbers that can be represented in the form p/q, where q is an integer power of
	2, can be expressed exactly with a finite number of ones (1) and zeros (0).
	
	To add to the issue, a computer has a finite amount of space available to hold a
	binary number. Computers frequently use a set of eight switches to represent a
	number, called a byte. If all eight of these switches in one byte are on or set
	to one (11111111), the binary number converts to a decimal number of 255. So 255
	would be the largest number a byte could hold. The number 256 requires another
	switch, or nine bits. A Visual Basic integer is two bytes long. That is 16 bits
	or 16 ones and zeros to represent a binary number. A single in Visual Basic is
	four bytes long.
	
	How Computers Represent Fractions
	
	There is an Institute of Electrical and Electronics Engineers, Inc. (IEEE)
	standard that dictates the computer representation of fractions, also known as
	floating-point values. The standard uses 32 bits that are numbered 0 to 31 from
	left to right. The first bit is the sign bit to represent positive or negative
	numbers. The next eight bits represent the exponent, and the remaining 23 bits
	are the fraction. Therefore, not only does a floating-point value have a finite
	numerical value that it can hold, it has a limit to the accuracy of a number
	that it can hold. Taking the example of 0.01, this number cannot be represented
	in a finite amount of space. Therefore, this number is rounded down by
	approximately -2.78E-17 when it is stored in Visual Basic as a single data
	type.
	
	When the mathematical operation 1.26 - 1.25 is performed, Visual Basic actually
	returns 0.009999 instead of 0.01. The value of 0.01 cannot be represented as a
	non-repeating binary decimal. Microsoft recommends that you always use format
	statement when numbers are displayed to avoid the confusion of 9.99999E-03
	rather than 0.01. Also, if accuracy is important to your calculation, use the
	Decimal data type. A Double gives you more precision but does not completely
	resolve the problem.
	
	A simple test to run in Visual Basic is a For loop as follows:
	
	  Dim i As Integer
	  Dim Sum As Single
	
	  For i = 0 To 100
	    Sum = Sum + 0.01
	  Next i
	  Text1.Text = Sum
	
	The sum is equal to 1.01, but the Text1.Text displays 1.009999.
	
	For the same reason, you should always be very cautious when you make comparisons
	on numbers. The following example illustrates a common programming error:
	
	  Dim i As Integer
	  Dim x As Single
	  Dim y As Single
	
	  For i = 0 To 1000
	    x = x + 0.01
	  Next i
	  y = 10.082 - 0.072
	
	  If (x = y) Then Text3.Text = "Equal!"
	  Text4.Text = x
	  Text5.Text = y
	
	This code does not display "Equal!" in the Textbox, because 10.01 cannot be
	represented exactly in binary, which causes the value that results from the
	assignment to be slightly different in binary than the value that is generated
	from the arithmetic expression. In practice, you should always code such
	comparisons in such a way as to allow for some tolerance, such as:
	
	  Dim i As Integer
	  Dim x As Single
	  Dim y As Single
	
	  For i = 0 To 1000
	    x = x + 0.01
	  Next i
	  y = 10.082 - 0.072
	
	  If ((x - y) < 0.01 And (x - y) > -0.01) Then
	    Text3.Text = "Equal!"
	  End If
	  Text4.Text = x
	  Text5.Text = y
	
	In addition, you need to be aware that in long mathematical expressions, Visual
	Basic stores intermediate values. For example, in the calculation CInt(4.555 *
	100), the value 455.5 is temporarily stored and used in the CInt() function. If
	you break the calculation into the two steps, x = 4.555 * 100 and CInt(x), you
	avoid this internal storage and thus avoid the floating-point rounding error.
	
	Following are other common floating-point errors:
	
	- Round-off error - This error results when all of the bits in a binary number
	  cannot be used in a calculation.
	
	- Overflow and underflow - This error occurs when the result is too large or
	  too small to be represented by the data type.
	
	- Division by a very small number - This can trigger a "divide by zero" error
	  or can produce bad results.
	
	NOTE: This is not specifically a Visual Basic problem. You have the same problem
	with C, FORTRAN, or any other language that stores floating-point numbers
	according to IEEE standards.
	
	REFERENCES
	==========
	
	For additional information on numeric precision, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q174155 PRB: Format Function May Return Incorrect Values
	
	  Q145889 INFO: Why Floating Point Numbers May Lose Precision
	
	
	  Q125056 INFO: Precision and Accuracy in Floating-Point Calculations
	
	
	Additional query words: accurate
	
	======================================================================
	Keywords          : kbCompiler KbVBA kbVBp kbVBp400 kbVBp500 kbVBp600 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
